import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {dispatch} = useContext(UserContext)
  


  let navigate = useNavigate();

  const loginUser = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(" datab is : ", data);

      if (data.status === 422 || !data) {
        window.alert("Something went wrong");
        console.log("Something went wrong");
      } else {
        dispatch({type:"USER", payload:true})
        window.alert("You are loggedin");
        console.log("You are loggedin");
        navigate("/");
        // window.location.href = "../Login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
   

      <div className=" px-6 h-full">
        <div className="flex justify-center items-center ml-10  text-gray-800">
          <div className="md:w-8/12 lg:w-6/12  md:mb-0  w-[50%]">
            <img
              src="https://theupay.com/bank/Assets/login.jpg"
              className="w-83  mb-4"
              alt="Phone "
            />
          </div>
          <div className="ml-20   lg:w-7/12  w-[50%] bg-white  rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>

            <form
              method="POST"
              className="px-8 pt-3 pb-8  bg-white rounded"
            >
              <div className="mb-4 ">
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              

              <div className="mb-4 w-full ">
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
               
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={loginUser}
                >
                  Login
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <NavLink
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="../Login"
                >
                  Forgot Password?
                </NavLink>
              </div>
              <div className="text-center">
                <NavLink
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="../Login"
                >
                  Already have an account? Login!
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
