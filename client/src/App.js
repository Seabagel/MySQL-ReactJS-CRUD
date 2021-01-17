import "./App.css";
import { useState } from "react";
import Axios from "axios";

const App = () => {
  const [name, setName] = useState("");

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", { name: name }).then(() =>
      console.log(`Added employee: ${name}`)
    );
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
};

export default App;
