import React, { useState } from 'react'
import axios from 'axios'
const Viewfriend = () => {
  var [friendlist,setFriend]=useState("")
  var [loadStatus,setLoadstatus]=useState(true)

axios.get("https://dummyapifriends.herokuapp.com/view").then(
      (response) => {
      console.log(response.data)
      setFriend(response.data)
      setLoadstatus(false)
      }
    )
  return (
    <div>
    
    <div className="container">
    <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    {loadStatus ?<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :<table class="table table-primary table-striped">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">NAME</th>
  <th scope="col">FRIEND NAME</th>
  <th scope="col">FRIENDS NICKNAME</th>
  <th scope="col">DESCRIBE YOUR FRIEND</th>
</tr>
</thead>
<tbody>
    
        {friendlist.map((value,key)=>{
return <tr>
  <th scope="row">1</th>
  <td>{value.name}</td>
  <td>{value.friendname}</td>
  <td>{value.friendNickName}</td>
  <td>{value.DescribeYourFriend}</td>

</tr>

        })}

          </tbody>
</table>}

    </div>
    </div>
    </div>
    </div>
  )
  
    
    
    
    
      }

  


export default Viewfriend