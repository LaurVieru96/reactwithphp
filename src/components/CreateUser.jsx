import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:80/api/user/save", inputs);

    console.log(inputs);
  };
  return (
    <>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CreateUser;
