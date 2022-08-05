import { useState, useEffect, useContext } from "react";
import Logo from "./images/Logo.png";
// import tailwindConfig from '../../tailwind.config'
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../App";
const Navbar = () => {

  const {state} = useContext(UserContext)

  const [width, setwidth] = useState(window.innerWidth);
  const [Menu, setMenu] = useState(true)
  // const [navbarOpen, setNavbarOpen] = React.useState(true);

  useEffect(() => {
    function handleResize() {
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      setwidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const navigate = useNavigate();



  const RenderMenu = () => {
    if(state){
      return(<>
      
      {
width > 768 ?
(<div className="laptop">
    <nav className=" laptop flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 overflow-y-hidden z-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
   
        <span><img className="h-10 w-14 " src={Logo} alt="" /></span>
  
      </div>
      <div className="block lg:hidden xl:hidden">
        <button className="flex items-center  px-3 py-2 border rounded text-black  ">
          <svg
            className="fill-current h-3 w-3 font-serif"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className=" ml-10 w-full block flex-grow lg:flex lg:items-center lg:w-auto xl:flex xl:items-center xl:w-auto  sm:text-center">
        <div className="text-sm lg:flex-grow xl:flex xl:flex-grow">
          <NavLink
            to="/"
            className="block  lg:inline-block  text-black  mr-10 font-serif font-extrabold lg:text-lg xl:text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block  lg:inline-block text-black  mr-10 font-serif font-extrabold lg:text-lg xl:text-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block  lg:inline-block  text-black font-serif font-extrabold lg:text-lg xl:text-lg "
          >
            Contact Us
          </NavLink>
        
        </div>
        <div>
     

            {/* <button type="button"  onClick={()=>{navigate('/signup')}} className=" xl:mr-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Sign Up</button>

            <button type="button" onClick={()=>{navigate('/login')}} className=" xl:mr-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Login</button> */}

            <button type="button" onClick={ () =>{navigate('/logout')}} className="xl:mr-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Logout</button>
        </div>
      </div>
    </nav>
    </div>)

:
(
<div className="tablet phone">
    <nav className=" w-fullJ flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 overflow-y-hidden z-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">

        <span><img className="h-10 w-14 " src={Logo} alt="" /></span>

      </div>
      <div className="block lg:hidden xl:hidden">
        <button  id="menu"  onClick={() => setMenu(!Menu)} className="flex items-center  px-3 py-2 border rounded text-black  ">
          <svg
            className="fill-current h-3 w-3 font-serif"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={"  w-full " +  (Menu ? " block" : " hidden")}>
        <div className="text-sm lg:flex-grow xl:flex xl:flex-grow">
          <NavLink
            to="/"
            className=" md:block  text-black   font-serif font-extrabold md:text-lg text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className=" md:block text-black  mt-2 font-serif font-extrabold md:text-lg text-center"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="md:block  text-black  mt-2 font-serif font-extrabold md:text-lg text-center"
          >
            Contact Us
          </NavLink>
        </div>
        <div>

<div className="SignUp md:flex justify-center gap-10 mt-4">

            {/* <button type="button"  onClick={()=>{navigate('/signup')}} className="  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  ">Sign Up</button>


            <button type="button" onClick={()=>{navigate('/login')}} className="  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  ">Login</button> */}

            <button type="button" onClick={() => {navigate('/logout')}} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic   ">Logout</button>
            {/* </div> */}

</div>


        </div>
      </div>
    </nav>
    </div>)}
      
      </>
      )
    }
    
    
    else
    
    
    
    {
      return(<>
      
      
      {
width > 768 ?
(<div className="laptop">
    <nav className=" laptop flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 overflow-y-hidden z-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
   
        <span><img className="h-10 w-14 " src={Logo} alt="" /></span>
  
      </div>
      <div className="block lg:hidden xl:hidden">
        <button className="flex items-center  px-3 py-2 border rounded text-black  ">
          <svg
            className="fill-current h-3 w-3 font-serif"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className=" ml-10 w-full block flex-grow lg:flex lg:items-center lg:w-auto xl:flex xl:items-center xl:w-auto  sm:text-center">
        <div className="text-sm lg:flex-grow xl:flex xl:flex-grow">
          <NavLink
            to="/"
            className="block  lg:inline-block  text-black  mr-10 font-serif font-extrabold lg:text-lg xl:text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block  lg:inline-block text-black  mr-10 font-serif font-extrabold lg:text-lg xl:text-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block  lg:inline-block  text-black font-serif font-extrabold lg:text-lg xl:text-lg "
          >
            Contact Us
          </NavLink>
        
        </div>
        <div>
     

            <button type="button"  onClick={()=>{navigate('/signup')}} className=" xl:mr-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Sign Up</button>

            <button type="button" onClick={()=>{navigate('/login')}} className=" xl:mr-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Login</button>

            {/* <button type="button" onClick={ () =>{navigate('/logout')}} className="xl:mr-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Logout</button> */}
        </div>
      </div>
    </nav>
    </div>)

:
(
<div className="tablet phone">
    <nav className=" w-fullJ flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 overflow-y-hidden z-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">

        <span><img className="h-10 w-14 " src={Logo} alt="" /></span>

      </div>
      <div className="block lg:hidden xl:hidden">
        <button  id="menu"  onClick={() => setMenu(!Menu)} className="flex items-center  px-3 py-2 border rounded text-black  ">
          <svg
            className="fill-current h-3 w-3 font-serif"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={"  w-full " +  (Menu ? " block" : " hidden")}>
        <div className="text-sm sm:flex sm:flex-col">
          <NavLink
            to="/"
            className=" md:block  text-black   font-serif font-extrabold md:text-lg  text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className=" md:block text-black  mt-2 font-serif font-extrabold md:text-lg text-center"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="md:block  text-black  mt-2 font-serif font-extrabold md:text-lg text-center"
          >
            Contact Us
          </NavLink>
        </div>
        <div>

<div className="SignUp md:flex justify-center sm:flex sm:flex-col sm:justify-center  sm:w-28 sm:pt-3 sm:m-auto gap-10 mt-4">

            <button type="button"  onClick={()=>{navigate('/signup')}} className="  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  ">Sign Up</button>

            {/* <div className="Login md:flex "> */}

            <button type="button" onClick={()=>{navigate('/login')}} className=" sm:-mt-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  ">Login</button>
{/* 
            <button type="button" onClick={() => {navigate('/logout')}} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic   ">Logout</button> */}

</div>


        </div>
      </div>
    </nav>
    </div>)}
      
      
      
      
      
      
      
      
      
      
      
      
      </>)      
    }
  }










  return (
    <>
      {/* {
width > 768 ?
(<div className="laptop">
    <nav className=" laptop flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 overflow-y-hidden z-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
   
        <span><img className="h-10 w-14 " src={Logo} alt="" /></span>
  
      </div>
      <div className="block lg:hidden xl:hidden">
        <button className="flex items-center  px-3 py-2 border rounded text-black  ">
          <svg
            className="fill-current h-3 w-3 font-serif"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className=" ml-10 w-full block flex-grow lg:flex lg:items-center lg:w-auto xl:flex xl:items-center xl:w-auto  sm:text-center">
        <div className="text-sm lg:flex-grow xl:flex xl:flex-grow">
          <NavLink
            to="/"
            className="block  lg:inline-block  text-black  mr-10 font-serif font-extrabold lg:text-lg xl:text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block  lg:inline-block text-black  mr-10 font-serif font-extrabold lg:text-lg xl:text-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block  lg:inline-block  text-black font-serif font-extrabold lg:text-lg xl:text-lg "
          >
            Contact Us
          </NavLink>
        
        </div>
        <div>
     

            <button type="button"  onClick={()=>{navigate('/signup')}} className=" xl:mr-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Sign Up</button>

            <button type="button" onClick={()=>{navigate('/login')}} className=" xl:mr-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Login</button>

            <button type="button" onClick={ () =>{navigate('/logout')}} className="xl:mr-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  lg:mr-4">Logout</button>
        </div>
      </div>
    </nav>
    </div>)

:
(
<div className="tablet phone">
    <nav className=" w-fullJ flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 overflow-y-hidden z-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">

        <span><img className="h-10 w-14 " src={Logo} alt="" /></span>

      </div>
      <div className="block lg:hidden xl:hidden">
        <button  id="menu"  onClick={() => setMenu(!Menu)} className="flex items-center  px-3 py-2 border rounded text-black  ">
          <svg
            className="fill-current h-3 w-3 font-serif"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={"  w-full " +  (Menu ? " block" : " hidden")}>
        <div className="text-sm lg:flex-grow xl:flex xl:flex-grow">
          <NavLink
            to="/"
            className=" md:block  text-black   font-serif font-extrabold md:text-lg text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className=" md:block text-black  mt-2 font-serif font-extrabold md:text-lg text-center"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="md:block  text-black  mt-2 font-serif font-extrabold md:text-lg text-center"
          >
            Contact Us
          </NavLink>
        </div>
        <div>

<div className="SignUp md:flex justify-center gap-10 mt-4">

            <button type="button"  onClick={()=>{navigate('/signup')}} className="  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  ">Sign Up</button>


            <button type="button" onClick={()=>{navigate('/login')}} className="  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic  ">Login</button>

            <button type="button" onClick={() => {navigate('/logout')}} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic   ">Logout</button>

</div>


        </div>
      </div>
    </nav>
    </div>)} */}


{/* trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}

<RenderMenu/>



      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              menu
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
