import Axios from "axios";
import React, { useEffect, useState } from "react";

const Header=()=>{
      const [Data ,setData]=useState([]);
      const [loading, setLoading]=useState(false);

    const handleBTN=()=>{
        setLoading(true)
            Axios({
                url:"https://reqres.in/api/users",
                method:"GET"
            }).then(Response => {
                console.log(Response.data)
                setData(Response.data.data)
                setLoading(false)
            }).catch(err=>{
                console.log(err)
                setLoading(false)
            }
            )
        
    }
return(
    <div className="header">
        <button className="btn" onClick={handleBTN}>Get user List</button>
        <div className="header-span">
            <span>Full Name</span>
            <span>Last Name</span>
            <span>Email</span>
            <span>Avatar</span>
        </div>
        <div>

         {loading?<p>Loading...</p>:Data.length>0?Data.map((item) => (
                <ul key={item.id} className="ul-item"> 
                  <li>{item.first_name}</li> 
                  <li>{item.last_name}</li>
                  <li>{item.email}</li>
                  <li><img src={item.avatar} alt={`${item.first_name} avatar`} /></li>
                </ul>
              )):<p>No Data</p>} 
              
        </div>
    </div>
)
};


export default Header;