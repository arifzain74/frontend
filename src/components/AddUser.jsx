import React from "react";
import axios from "axios";
import { useState } from "react";

function AddUser(){
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        pass:"",
        cpass:""
    })

    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const { name,email,pass,cpass } = formData
        if(!name||!email||!pass||!cpass)
        {
            alert("Please fill all fields")
            return
        }
        else if(pass!=cpass)
        {
            alert("Password and confirm password must be equal")
            return
        }
        try{
            const sendData = { name, email, pass};
            const res = await axios.post('http://localhost:3002/api/adduser',sendData)
            console.log(res);
            alert(res.data.msg)
        }
        catch(e){
            alert("Adding data failed", e)
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={formData.name}/><br />
            <input type="text" placeholder="Enter Email" name='email' onChange={handleChange} value={formData.email}/><br /><br />
            <input type="password" placeholder="Enter Password" name="pass" onChange={handleChange} value={formData.pass}/><br />
            <input type="password" placeholder="Confirm Password" name="cpass" onChange={handleChange} value={formData.cpass}/> <br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default AddUser
