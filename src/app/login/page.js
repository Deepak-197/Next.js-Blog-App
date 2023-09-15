"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import axios from 'axios';

const page = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    const payload = {
      email: email,
      pass: pass
    }
    console.log("payloadcheck", payload)

    // axios.post(`https://awful-overalls-colt.cyclic.app/users/login`, payload)
    // .then(res => {
    //   if(res?.data){
    //     router.push("/")
    //   }
    // })
    // .catch(err => console.log(err.response))

    fetch(`https://awful-overalls-colt.cyclic.app/users/login`,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
          "Content-Type": "application/json"
        }
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.token){

        localStorage.setItem("token", res.token)
        alert("Successfully Logged in")
        router.push("/")
      }else{
        alert("Fill all the credentials.")
      }
    })
    .catch(err => console.error(err))

  }

  


  return (
    <form onSubmit={handleLogin} id='container'>
      <div>Login Page</div>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'  />
      <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Password'  />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default page
