import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Home = () => {
const [users, setUsers] = useState([])
useEffect(()=>{
  const fetchUsers =async ()=>{
    const res = await axios.get('http://localhost:4000/api/users/find')
    console.log(res.data.data);
    setUsers(res.data.data)

  }
  fetchUsers()
},[])
  return (
    <div >
    <table class="table-fixed">
      <thead>
        <tr>
          <th>Users</th>
          <th>University</th>
          <th>Subjects</th>
          <th>Actions</th>

        </tr>
      </thead>
    {users.map((user)=>(
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.university}</td>
          <td>{user.subjects[0]}</td>
          <td>{user.subjects[1]}</td>


        </tr>
        
      </tbody>
  ))}
    </table>
  </div>
  
  )
}

export default Home
