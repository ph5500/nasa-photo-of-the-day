import React, { useEffect } from "react";
import "./App.css";
import ApiContent from "./components/ApiContent";
import CardContent from "./components/CardContent"




function App() {
  return (
    <div className="App">
      <h1> Photo of the Day!</h1>


      <ApiContent />
    </div>
  );
}

export default App;