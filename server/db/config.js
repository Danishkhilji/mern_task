const mongoose =require("mongoose")
const DB= "mongodb+srv://mern_task:mern_task@cluster0.wutcj.mongodb.net/database"

mongoose.connect(DB).then(()=>console.log("connected")).catch((err)=> console.log(err));



module.exports={mongoose};