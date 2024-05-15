import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log(res.data.data);
      if (res.data.data != undefined) {
        setData(res.data.data);
      }
    });
  }, []);

  return (
    <div className="App" style={{ color: "red" }}>
      {data.map((val) => (
        <span>
          <p>Email: {val.email}</p>
          <img src={val.avatar}/>
        </span>
      ))}
    </div>
  );
}

export default App;
