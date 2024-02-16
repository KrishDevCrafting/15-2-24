import React from "react";

const Form = () => {
  const [data, setData] = React.useState({ Password: "", Email: "" });
  const [tabledata, setTabledata] = React.useState([]);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTabledata([...tabledata, data]);
    setData({ Email: "", Password: "" });

    fetch("http://localhost:7000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log("Success", rData);
        setData({ Password: "", Email: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container my-5">
      <h1>Form-Json</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={data.Email}
            onChange={handleValue}
            name="Email"
            aria-describedby="emailHelp"
            placeholder="Enter your Email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={data.Password}
            type="password"
            className="form-control"
            onChange={handleValue}
            name="Password"
            placeholder="Enter your Password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="checkbox"
            value="checked"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Form;

//useState //useEffect// useRAp // HOC in react//json//useMemo// http Method
