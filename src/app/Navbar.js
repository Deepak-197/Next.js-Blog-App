"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("User Logout")
        router.push("/")

    }
  return (
    <nav>
    <div>

      <a href='/'><h2>Blog App</h2></a>
    </div>
      <div className='navdiv'>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
      <a href="/">Home</a>
      <a href="/createnotes">Post Blogs</a>
      <a href="/">Profile</a>
      <h4 onClick={handleLogout}>Logout</h4>
      </div>
    </nav>
  )
}

export default Navbar