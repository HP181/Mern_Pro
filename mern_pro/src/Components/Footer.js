import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="bg-black fixed bottom-0 w-full">
        <div className="text-center p-3 text-white">
          © 2020 Copyright : 
          <NavLink  to="https://mdbootstrap.com/">
             &nbsp; CodeWithHkp
          </NavLink>
        </div>
      </footer>






  );
};

export default Footer;
