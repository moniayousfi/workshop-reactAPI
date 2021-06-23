import React,{useState,useEffect} from 'react'
import axios from "axios"
import User from "./User"
 const UsersList = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
     axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err)) 

    }, [])
console.log(users);
    return (
        <div>
            {users.map(user=> <User user={user} />)}
        </div>
    )
}
 export default UsersList;