import React from "react";
import axios from "axios";
import { useState } from "react";

function Add(){
    const [formData,setFormData] = useState({
        name:"",
        phone:"",
        image:""
    })

    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleFileChange = async(e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({...formData,image:reader.result}) //base64 string
            };
            reader.readAsDataURL(file);
        }

    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post('https://backend-6n4h.onrender.com/api/add',formData)
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
            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={formData.name}/>
            <input type="text" placeholder="Enter Number" name='phone' onChange={handleChange} value={formData.phone}/>
            <input type="file" onChange={handleFileChange} />
            <img src={formData.image} alt="" width="100" />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Add