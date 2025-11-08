import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
    const [formData, setFormData] = useState({
        name: "",
        phone: ""
    });

    const [dataList, setDataList] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3002/api/get");
                setDataList(res.data); // assuming res.data is an array of objects
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const match = dataList.find(item => item.name.toLowerCase() === formData.name.toLowerCase());
            
            if(!match)
            {
                alert("No User Found")
                return
            }
            
            
            const res = await axios.get(`http://localhost:3002/api/get/${match._id}`);
            setDataList([res.data])
        } catch (e) {
            alert("Search Failed");
            console.error(e);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Name" name="name" onChange={handleChange} value={formData.name}/><br />
            <button type="submit">Search</button>
        </form>
            <h3>Fetched Data:</h3>
            <ul>
                {dataList.map((item, index) => (
                    <li key={index}>
                        Name: {item.name}, Phone: {item.phone}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Get;
