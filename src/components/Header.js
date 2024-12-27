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
        {/* <div className="header-span">
            <span>Full Name</span>
            <span>Last Name</span>
            <span>Email</span>
            <span>Avatar</span>
        </div> */}
    <table>
    <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
    </table>
        <div>
        <table>
  {loading ? (
    <caption>Loading...</caption> // Use caption for loading message in tables
  ) : Data.length > 0 ? (
    <>
      
      <tbody>
        {Data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>
              <img src={item.avatar} alt={`${item.first_name} avatar`} height="50" width="50" />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  ) : (
    <caption>No data found to display</caption> // Use caption for empty state
  )}
</table>

        </div>
    </div>
)
};


export default Header;