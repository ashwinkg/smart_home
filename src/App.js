import React from "react";
import { Admin, Sidebar } from "./components";
import "./index.css";

function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <Admin />
    </div>
  );
}

export default App;
