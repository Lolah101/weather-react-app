import React from "react";
import Weather from "./Weather";
import Videos from "./Videos";
import Swap from "./Swap";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Videos />
        <Swap />
        <Weather defaultCity="Paris" />
      </div>
    </div>
  );
}
