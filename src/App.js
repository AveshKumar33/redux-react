import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called", userName, email, password);
    axios
      .post("http://localhost:8000/signup", {
        userName: userName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
      });
  };
  return (
    <div className="App">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <p>User name</p>
        <input
          required
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <p>User email</p>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>{" "}
        <p>User password</p>
        <input
          required
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
