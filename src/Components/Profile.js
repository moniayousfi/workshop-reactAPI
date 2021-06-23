import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
 const Profile = () => {
const [profils,setProfils]=useState([])
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(res=>setProfils(res.data)).catsh(err=>console.log(err))

}, [])
    return (
        <div>
            
        </div>
    )
}
export default Profile;