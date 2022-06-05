import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Input from "../components/Input/Input"
import EntryCard from "../components/card/card"
import InputGroup from "../components/InputGroup/InputGroup"
import { EntryPage, PageHeader } from './Style'
import Button from "../components/Button/Button"
import axios from "axios";
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';

const SignUp = () => {
const [name,setName] =useState('')
const [email,setEmail] =useState('')
const [password,setPassword] =useState('')

const navigate =useNavigate();
const addUser=(e)=>{
  e.preventDefault()


  axios.post('http://localhost:4000/signup', {name,email,password})
  .then(function (response) {    
    toast.success('User registered Successfull', {  position: 'top-center'})
    navigate("/login")
  })
  .catch(function (error) {
    toast.error(error.response.data, {  position: 'top-center'})
    });
}
  return (
    <EntryPage>
      <PageHeader to="/">Mern Task</PageHeader>
        <EntryCard>
          <h2>Sign up in</h2>
          <form onSubmit={addUser}>
            <InputGroup>
            <label>User Name</label>
            <Input type="text" placeholder="enter user Name" onChange={(e)=>setName(e.target.value)}/>
            </InputGroup> 
            <InputGroup>
            <label>Email</label>
            <Input type="email" placeholder="enter email address" onChange={(e)=>setEmail(e.target.value)}/>
            </InputGroup> 
            
            <InputGroup>
            <label>Password</label>
            <Input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
            </InputGroup>
            <Button type="submit" full>Login</Button>
          </form>
          <span>
            Already have an account
            <Link to="/login">Login</Link>
          </span>
        </EntryCard>
    </EntryPage>

    )
}

export default SignUp
