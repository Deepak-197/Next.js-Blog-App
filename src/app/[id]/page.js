"use client"
import React, { useEffect } from 'react'
import axios from 'axios'

const page = ({ params }) => {
     const [single, setSingle] = ([])


    console.log("rydj rhtgurj bvbgtuirj nbvhgjub ", params?.id)
    useEffect(() => {
        axios.get(`https://awful-overalls-colt.cyclic.app/notes/${params?.id}`).then(res => {
            console.log("singlr candi data", res.data)
            setSingle(res.data)
        }).catch(err => console.log(err))
    }, [params?.id])

    console.log(single)
  return (
    <div><div>My Post: {params.id}</div></div>
  )
}

export default page