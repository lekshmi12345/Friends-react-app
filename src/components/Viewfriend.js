import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'


const View = () => {
    var [viewlist,setViewlist]=useState([])
    var[loadstatus,setLoadstatus]=useState(true)
    axios.get("https://dummyapifriends.herokuapp.com/view").then(
        (response)=>{
            console.log(response.data)
            setViewlist(response.data)
            setLoadstatus(false)
        }
    )
    
  return (
    <div>
       <Header/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
            
  
    {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">friendName</th>
      <th scope="col">friendNickName</th>
      <th scope="col">DescribeYourFriend</th>
  
     
    </tr>
  </thead>
   
    <tbody>
    {viewlist.map((value,key)=>{
                    return  <tr>
      <th scope="row">{value.name}</th>
      <td>{value.friendName}</td>
      <td>{value.friendNickName}</td>
      <td>{value.DescribeYourFriend}</td>
      
    </tr>
    
 
                   
                    
                })}
                 </tbody>
  </table>
}
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default View