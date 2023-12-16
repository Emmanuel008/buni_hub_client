import React, { useState } from "react";
import { IoSaveSharp } from "react-icons/io5";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const VisitorRegistrationFrom = () => {
  const navigate =useNavigate()
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    location: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

const handleSubmit = async (event) =>{ 
  event.preventDefault();
  try {
    const { first_name, last_name, location, email, role, phoneNumber } = values;
  await axios.post('http://localhost:8081/api/member/createMember',{
    first_name, last_name, email, role, location, phoneNumber
  }).then(()=>{
    navigate('/thanks')
  })
  } catch (error) {
    console.log(error)
  }
  
}
  return (
    <section className="w-full h-screen  flex items-center justify-center px-5 py-5">
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-orange-400 rounded-t">
          <h2 className="font-semibold text-3xl text-orange-500">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white space-y-6">
            <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
              <div className="md:w-2/3 max-w-sm mx-auto">
                <label className="text-sm text-gray-400">Email</label>
                <div className="w-full inline-flex border">
                  <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                    <svg
                      fill="none"
                      className="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="email@example.com"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
              <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
              <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                <div>
                  <label className="text-sm text-gray-400">First name</label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder="Charly"
                      name="first_name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Last name</label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder="Olivas"
                      name="last_name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Role</label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder="Enterprenuer"
                      name="role"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Phone number</label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder='+255756079815'
                      name="phoneNumber"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400" htmlFor="grid-city">
                    Location
                  </label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-400 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder="Dar es Salaam"
                      name="location"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex  items-center justify-center p-2">
              <button
                type="submit"
                className=" flex items-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-5 px-10 rounded-md"
              >
                <IoSaveSharp className="mr-2" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VisitorRegistrationFrom;
