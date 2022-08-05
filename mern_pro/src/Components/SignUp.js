import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let navigate = useNavigate();

  let name, value;

  const handleInputs = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      window.alert("Something went wrong");
    } else {
      window.alert("You are registered");
      navigate("/login");
      // window.location.href = "../Login";
    }
  };

  return (
    <>
      {/* <div className="font-mono   ">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 ">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex ">
              <div
                className="w-full h-auto  lg:block lg:w-5/12 bg-cover rounded-l-lg "
                style={{
                  backgroundImage:
                    "url('https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png')",
                    "marginRight":30
                }}
              ></div>
               <div className="ml-20 mt-10 w-full lg:w-7/12 bg-white  rounded-lg lg:rounded-l-none">
               <h3 className="pt-4 text-2xl text-center">
                  Create an Account!
                </h3>

                <form
                  method="POST"
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="name"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInputs}
                      />
                    </div>

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
                        name="email"
                        type="text"
                        // pattern=".+@beststartupever\.com"
                        placeholder="Email"
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="work"
                      >
                        Worm / Occupation
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="work"
                        name="work"
                        type="text"
                        placeholder="Work"
                        autoComplete="off"
                        value={user.work}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="cpassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="cpassword"
                        type="password"
                        name="cpassword"
                        placeholder="******************"
                        autoComplete="off"
                        value={user.cpassword}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <NavLink
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to="x"
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
        </div>
      </div> */}

   
        <div className=" w-screen  ">
          <div className="flex flex-row  justify-center items-center ml-10  text-gray-800">
                  <div className=" md:w-8/12 xl:w-6/12  md:mb-0">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
                      className="w-full mb-6"
                      alt="Phone "
                    />
                  </div>
            <div className="w-[50%]  mt-4 bg-white  rounded-lg lg:rounded-l-none">
               <h3 className=" text-2xl text-center">
                  Create an Account!
                </h3>

                <form
                  method="POST"
                  className="px-8 pt-6 pb-8  bg-white rounded"
                >
                  <div className="  mb-4 flex  flex-row justify-around">
                    <div className="mb-4 md:mr-2 md:mb-0 ">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="name"
                      >
                        First Name
                      </label>
                      <input
                        className=" px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mr-10 "
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className=" px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="text"
                        // pattern=".+@beststartupever\.com"
                        placeholder="Email"
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="mb-4 flex  flex-row justify-around">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="px-3 py-2  text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline mr-10"
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="work"
                      >
                        Worm / Occupation
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="work"
                        name="work"
                        type="text"
                        placeholder="Work"
                        autoComplete="off"
                        value={user.work}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="mb-4 flex  flex-row justify-around">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="px-3 py-2  text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline mr-10"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="cpassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="cpassword"
                        type="password"
                        name="cpassword"
                        placeholder="******************"
                        autoComplete="off"
                        value={user.cpassword}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-4 border-t" />
                  <div className="text-center">
                    <NavLink
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to="x"
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

export default SignUp;
