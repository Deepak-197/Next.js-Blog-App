"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'


 const page = () => {
   const router = useRouter()
   const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [pass, setPass] = useState("")

   const handleRegister = (e) => {
    e.preventDefault()
    const payload={
      name,
      email,
      age,
      pass
  }
  console.log(payload)

  fetch(`https://awful-overalls-colt.cyclic.app/users/register`,{
      method: 'POST',
      body: JSON.stringify(payload),
      headers:{
        "Content-Type": "application/json"
      }
  }).then(res => res.json())
  .then(res => {
    console.log(res)
    router.push("/login")
    alert("Registered")
  })
  .catch(err => console.error(err))
     
   }
  return (
    <form onSubmit={handleRegister} id='container'>
        <div>Registration Page</div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required/>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' required/>
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' required/>
        <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Password' required/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default page