import React, { createContext, useReducer } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Logout from "./Components/Logout";
import { initialState, reducer } from "./Reducer/UserReducer";




export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/SignUp" element={<SignUp />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Logout" element={<Logout />} />
    </Routes>
  );
};


const App = () => {
  // export const UserContext = createContext();
  const [state, dispatch] = useReducer(reducer, initialState)


 

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routing />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
