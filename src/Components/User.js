import React from 'react'

 const User = ({user} ) => {
    return (
        <div>
          <span>{user.name}</span> 
          <span>{user.email}</span> 
        </div>
    )
}
export default User;