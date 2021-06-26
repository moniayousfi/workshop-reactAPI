import React,{useState,useEffect} from 'react'
import axios from "axios"
import User from "./User"
import {NavLink} from "react-router-dom"
 const UsersList = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
     axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then(res=>{setUsers(res.data);
    console.log(res.data)})
     .catch(err=>console.log(err)) 

    }, [])

    return (
        <div>
            {users.map(user=> 
           <NavLink to={`/Profile/${user.id}`} > <User user={user} key={user.id}/></NavLink>)
            }
        </div>
    )
}
 export default UsersList;