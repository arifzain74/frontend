import React from "react";
import axios from "axios";
import { useState } from "react";

function Update(){
    const [formData,setFormData] = useState({
        name:"",
        phone:""
    })
    const [isEditable, setIsEditable] = useState(false);

    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleEdit = () => {
        setIsEditable(true);
    };

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const match = dataList.find(item => item.name.toLowerCase() === formData.name.toLowerCase());
            if(!match)
            {
                alert("No User Found")
                return
            }
            const res = await axios.put(`https://backend-6n4h.onrender.com/api/update/${match._id}`,formData)
            console.log(res);
        }
        catch(e){
            alert("Updating data failed", e)
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={formData.name} disabled={!isEditable}/><br />
            <input type="text" placeholder="Enter Number" name='phone' onChange={handleChange} value={formData.phone} disabled={!isEditable}/><br /><br />
            <button type="button" onClick={handleEdit}>Edit</button>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Update
