import Axios from "axios";
import React, { useState } from "react";

const Header = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBTN = () => {
    setLoading(true);
    Axios({
      url: "https://reqres.in/api/users",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="header">
      <button className="btn" onClick={handleBTN}>
        Get User List
      </button>
      
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        
        {/* Display loading message or data */}
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          ) : Data.length > 0 ? (
            Data.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <img src={item.avatar} alt={`${item.first_name} avatar`} height="50" width="50" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
              No data found to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Header;
