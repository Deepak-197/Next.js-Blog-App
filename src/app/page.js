'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from "next/link";

const page = () => {
  const router = useRouter()
  const [blogData, setBlogData] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(2)
  const [pageQwantity, setPageQwantity] = useState(0)


  const handleChange = (event, value) => {
    console.log("value page", value)
    setPage(value)
  }
  useEffect(() => {


    fetch(`https://awful-overalls-colt.cyclic.app/notes?page=${page}&limit=${limit}`, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.msg === 'Please Login') {

          router.push("/login")
          alert("Please Login")
        } else {
          setBlogData(res)
        }
      })
      .catch(err => console.error(err))


  }, [page])

  useEffect(() => {
    const totalPages = Math.ceil(blogData.totalCount/limit)

    setPageQwantity(totalPages)
  }, [blogData.length])
  console.log(blogData)

  const handleDelete = (id) => {
    fetch(`https://awful-overalls-colt.cyclic.app/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)

      })
      .catch(err => console.error(err))

  }



  const handleEdit = (id) => {

  }

  return (
    <div className="container">
      {blogData && blogData?.data?.map((el, index) => {
        return (
          <div key={index} >

            <h4>Title: {el.title}</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Category: {el.category}</p>
            <Link href={`/${el._id}`} ><h5>Author: {el.author}</h5></Link>
            
            <div>
              <button onClick={handleDelete(el._id)}>Delete</button>
              <button onClick={handleEdit(el._id)}>Edit</button>
              
            </div>
            <hr />
          </div>
        )
      })}

            <Stack spacing={4} m={"0px auto"}>
                {/* <Pagination count={pageQwantity} page={page} onChange={handleChange}  shape="rounded" color="primary" /> */}
                {/* <Pagination count={pageQwantity} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="primary" /> */}
                {/* <Pagination count={pageQwantity} page={page} onChange={handleChange}  shape="rounded" color="secondary" /> */}
                <Pagination count={pageQwantity} page={page} onChange={handleChange}  color="primary"/>
            </Stack>
    </div>
  )
}

export default page