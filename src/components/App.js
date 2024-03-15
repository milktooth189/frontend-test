import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const App = (props) => {

  return (
    <div className="container">
      <Header
      />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;
