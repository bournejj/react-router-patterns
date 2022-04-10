import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import colours from './ColourData'



function App() {
 
  return (
    <div>
      <BrowserRouter>
   
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}





export default App;
