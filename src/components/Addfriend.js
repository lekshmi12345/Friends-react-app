import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'


const Addfriend = () => {
    var [name,setName]=useState("")
    var [friendName,setFname]=useState("")
    var [friendNickName,setNicName]=useState("")
    var [DescribeYourFrienden,setDes]=useState("")
   
    
  
    const subData=()=>{
        const data={"name":name,"friendName":friendName,"friendNickName":friendNickName,"DescribeYourFriend":DescribeYourFrienden}
        console.log(data)
        axios.post("https://dummyapifriends.herokuapp.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("succesfully added")
                }
                else{
                    alert("failed to add")
                }
            }
        )
    }
  return (
    <div>
        <Header/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label  for="" className="form-label">Name</label>
                    <input  onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">friendName</label>
                    <input  onChange={(e)=>{setFname(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">friendNickName</label>
                    <input  onChange={(e)=>{setNicName(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DescribeYourFriend</label>
                    <input  onChange={(e)=>{setDes(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData}  className="btn btn-primary">Register</button>
                </div>
               
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addfriend