import React from "react";
import { Employee } from "./components";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [role, setRole] = useState("Product Engineer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Youtube Sensation",
      img: "/images/Employees/employee1.jpg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      id: 5,
      name: "Corey",
      role: "Devops Guy",
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Developer",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
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
                key={employee.id}
                id={employee.id}
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
