import "./App.css";

import { Navbar } from "./containers/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routers/Router";
import { useState } from "react";
import { Context } from "./context/Context";

function App() {
  const [valueBasket, setValueBasket] = useState([]);
  return (
    <Context.Provider value={{ valueBasket, setValueBasket }}>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
