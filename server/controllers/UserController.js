const userModel = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createJWT } = require("../auth/auth");





exports.LogIn = async (req, res, next) => {

    let { name, password } = req.body;
    console.log(name, password);
    userModel.findOne({ name: name }).then(user => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: "not found" }],
        });
      } else {
         bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
             return res.status(400).json({ errors: [{ password:"incorrect" }] 
             });
            }
      let access_token = createJWT(
        user.email,
        user._id,
        3600
      );
      jwt.verify(access_token, "process.env.TOKEN_SECRET", (err,
decoded) => {
        if (err) {
           res.status(500).json({ erros: err });
        }
        if (decoded) {
                    res.status(202).cookie('JWT_token', access_token, {  maxAge: 3600 ,sameSite: "none"})
                   // res.setHeader('Set-Cookie','visited=true; Max-Age=3000; HttpOnly');

                    // console.log(access_token);
            res.send(access_token)
          }
        });
       }).catch(err => {
         res.status(500).json({ erros: err });
       });
     }
  }).catch(err => {
     res.status(500).json({ erros: err });
  });

















    // const { name, password } = req.body
    // if (!name || !password) {
    //     res.send("Name or password invalid")
    // }



    // const user = await userModel.findOne({ name: name })
    // if (!user) {
    //          return res.status(404).json({
    //         errors: [{ user: "not found" }],
    //       });
    // }

    // else{
    //         bcrypt.compare(password, user.password)
    //         .then(authUser => {
    //             if (!authUser) {
    //             return res.status(400).json({ errors: [{ password:"incorrect" }] }); }  })

    //             const access_token = createJWT(user.email,"232141", 3600);

    //         return res.status(202).cookie('JWT_token', access_token, {  maxAge: 3600, httpOnly: true });
        }
    






exports.SignUp = async (req, res, next) => {

    const { name, email, password } = req.body
    if (!name || !password || !email) {
        res.send("Name or password invalid")
    }

    const user = await userModel.exists({ $or: [{ email: email }, { name: name }] })
    if (user) {
        res.send("try with another username or email ")
    } else {
        const user = new userModel({ name, email, password })
        user.password = await bcrypt.hash(user.password, 12);
            await user.save();
        res.send("user added")
        
        console.log("recorde added");
    }
}
