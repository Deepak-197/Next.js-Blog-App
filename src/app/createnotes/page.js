"use client"

import { useState } from "react"

const page = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [category, setCategory] = useState("")
    const [author, setPass] = useState("")

    const handleSubmit =(e)=> {
        e.preventDefault()
        const payload={
          title,
          note,
          category,
          author
        }
        console.log(payload)

        fetch(`https://awful-overalls-colt.cyclic.app/notes/create`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }

  return (
    <form onSubmit={handleSubmit} id='container'>
        <div>Create Notes Page</div>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' required/>
        <input type='text' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter Notes' required/>
        <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Category' required/>
        <input type='text' value={author} onChange={(e) => setPass(e.target.value)} placeholder='Enter Author' required/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default page
