import React from "react";
import { Employee } from "./components";
import { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [role, setRole] = useState("Product Engineer");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Youtube Sensation",
      img: "/images/Employees/employee1.jpg",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg",
    },
    {
      name: "John",
      role: "Director of Eng",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "Corey",
      role: "Devops Guy",
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    {
      name: "Jake",
      role: "Senior Developer",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log("update EMployee inside App.js");
    console.log(id, newName, newRole);
  }
  return (
    <>
      <div className="App">
        <input
          type="text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <div className="flex flex-wrap">
          {employees.map((employee) => {
            return (
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
