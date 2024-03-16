import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const App = (props) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // hoặc 'auto' nếu bạn muốn scroll mà không muốn hiệu ứng smooth
    });
  };

  return (
    <div className="container">
      <Header
      />
      <Outlet/>
      <Footer/>
      <img className="scroll-top" onClick={scrollToTop} src="/icon/component_scroll.png" alt="scroll"/>
    </div>
  )
}

export default App;
