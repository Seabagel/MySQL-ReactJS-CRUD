import "./App.css";
import { useState } from "react";
import Axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  const displayInfo = () => console.log(name + age + position + wage);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      position: position,
      wage: wage,
    }).then(() => console.log("success"));
    displayInfo();
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label>Age:</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />

        <label>Position:</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />

        <label>Wage:</label>
        <input type="number" onChange={(e) => setWage(e.target.value)} />

        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
};

export default App;
