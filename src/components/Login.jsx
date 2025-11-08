import React from "react";
import axios from "axios";
import { useState } from "react";

function Login(){
    const [formData,setFormData] = useState({
        email:"",
        pass:""
    })

    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post('https://backend-6n4h.onrender.com/api/login',formData)
            console.log("test",res);
            // alert(res.data);
            res.status == 200? alert("logged in"):alert("log in failed")
        }
        catch(e){
            alert("Login failed", e)
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter email" name="email" onChange={handleChange} value={formData.email}/><br />
            <input type="password" placeholder="Enter password" name='pass' onChange={handleChange} value={formData.pass}/><br /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login
