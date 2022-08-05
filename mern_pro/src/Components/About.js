import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [UserData, setUserData] = useState({});
  let navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("http://localhost:5000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);
      console.log("my data from about", data);

      if (res.status !== 200) {
        console.log("please login");
        navigate("/login");

        const error = new Error(res.error);
        throw error;
      }

      // if(res.status === 401){
      //   console.log("please login");
      //   navigate('/login')
      // }

      // if (!data) {
      //   console.log("data error");
      // }
    } catch (error) {
      console.log("error is : ", error);
    }
  };

  useEffect(() => {
    callAboutPage();
    // console.log("i am useeffect");
    //  eslint-disable-next-line
  },[]);

  return (
    <>
      {/* <div className="main bg-[#f8f8f8] w-full h-[32.5em] bg-gradient-to-b from-[#F8F8F8] to-[#e4e4e4]" >
            <div className="details bg-gradient-to-b from-[#ffffff] to-[#d7d7d7] flex flex-col justify-center items-center relative top-36 m-auto w-[40em] h-44 ">
              <h1>Name : {UserData.name}</h1>
              <h1>Email : {UserData.email}</h1>
              <h1>Phone : {UserData.phone}</h1>
              <h1>Work : {UserData.work}</h1>
            </div>
      </div> */}


<div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{UserData.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">


            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{UserData.email}</dd>

          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

            <dt className="text-sm font-medium text-gray-500">Work</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{UserData.work}</dd>

          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {UserData.phone}</dd>
          </div>
         
        </dl>
      </div>
    </div>


    </>
  );
};

export default About;
