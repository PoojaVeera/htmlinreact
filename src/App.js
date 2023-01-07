import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import kendoka from "./kendoka.svg";
import "./App.scss";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import ReactDOM from "react-dom/client";
import Page4 from "./components/page4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page1 />
        {/* <Page2 /> */}
        {/* <Page4 /> */}
        {/* <Page3 /> */}
      </header>
    </div>
  );
}

export default App;
