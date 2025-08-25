import React, { useRef, useState } from "react";
import netflixBg from "../assets/Netflix-background.jpg";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorText, setErrorText] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitForm = () => {
    // validation of form data
    const errorStatus = validate(email.current.value, password.current.value);
    if (errorStatus) {
      setErrorText(errorStatus);
      return;
    } else {
      setErrorText("");
    }

    // Authentication of User
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={netflixBg}
          alt="netflix-bg-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          className="flex flex-col gap-4 bg-black/60 p-6 rounded-lg w-[320px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-semibold text-white text-2xl p-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Enter Email"
              className="w-full p-2 rounded placeholder:text-gray-100 outline-0 text-white bg-black"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Enter Email"
            className="w-full p-2 rounded placeholder:text-gray-100 outline-0 text-white bg-black"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter Password"
            className="w-full p-2 rounded placeholder:text-gray-100 outline-0 text-white bg-black"
          />
          <button
            className="p-2 mt-2 w-full bg-red-600 text-white cursor-pointer"
            onClick={handleSubmitForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {errorText ? (
            <span className="text-sm text-red-500 font-semibold">
              {errorText}
            </span>
          ) : null}
          <p
            className="p-2 w-full text-white text-[14px] text-center cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to nextflix? Let's Sign Up Now"
              : "Already a user? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
