import React,{useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import Input from "../components/Input/Input"
import EntryCard from "../components/card/card"
import InputGroup from "../components/InputGroup/InputGroup"
import { EntryPage, PageHeader } from './Style'
import Button from "../components/Button/Button"
const Login = () => {

  const [name,setName] =useState('')
  const [password,setPassword] =useState('')
  
  const navigate =useNavigate();
  const userLogin=(e)=>{
    e.preventDefault()
    let config = {
      
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post('http://localhost:4000/login', {name,password},config)
    .then(function (response) {
      console.log(response);
     // navigate("/")
  
    })
    .catch(function (error) {
      console.log("catch ==>",  error);
    });
  }

  return (
    <EntryPage>
      <PageHeader to="/">Mern Task</PageHeader>
        <EntryCard>
          <h2>Log in</h2>
          <form method="POST" onSubmit={userLogin}>
            <InputGroup>
            <label>User Name</label>
            <Input type="text" placeholder="enter user Name" onChange={(e)=>setName(e.target.value)}/>
            </InputGroup> 
            
            <InputGroup>
            <label>Password</label>
            <Input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
            </InputGroup>
            <Button type="submit" full>Login</Button>
          </form>
          <span>
            Don't have an account
            <Link to="/signup">create account</Link>
          </span>
        </EntryCard>
    </EntryPage>

    )
}

export default Login