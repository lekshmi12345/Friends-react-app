import axios from 'axios'
import React, { useState } from 'react'
const Addfriend = () => {   
    var [name,setName]=useState("")
    var [friendname,setFriend]=useState("")
    var [friendNickName,setNick]=useState("")
    var [DescribeYourFriend,setDescribe]=useState("")

    const subData=()=>{
        const data={"name":name,"friendname":friendname,"friendNickName":friendNickName,
        "DescribeYourFriend":DescribeYourFriend}
        console.log(data)
        axios.post("https://dummyapifriends.herokuapp.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("SUCCESSFULLY ADDED")
                }
                else{
                    alert("FAILED TO ADD")
                
                }
            }

        )

    } 


  return (
    <div>
    
    <div className="container">
<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">NAME:</label>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">FRIENDS NAME:</label>
                <input onChange={(e)=>{setFriend(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">FRIENDS NICKNAME:</label>
                <input onChange={(e)=>{setNick(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">DESCRIBE YOUR FRIEND:</label>
                <input onChange={(e)=>{setDescribe(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subData} className="btn btn-success">REGISTER</button>
            </div>
        </div>
    </div>
</div>
</div>
</div>
)
  }
    

export default Addfriend