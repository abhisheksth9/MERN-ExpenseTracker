import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Authentication() {
  const [type, setType] = useState("signIn");
  const isSignUp = type === "signUp";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f5f7]">
      <h2 className="text-2xl font-bold mb-6">Authentication Page</h2>

      <div className="relative w-[900px] max-w-full min-h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Sign In */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center
          transition-all duration-700
          ${isSignUp 
            ? "opacity-0 pointer-events-none z-10" 
            : "opacity-100 z-20"
          }`}
        >
          <SignIn />
        </div>

        {/* Sign Up */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center
          transition-all duration-700
          ${isSignUp 
            ? "translate-x-full opacity-100 z-20" 
            : "opacity-0 pointer-events-none z-10"
          }`}
        >
          <SignUp />
        </div>

        {/* Overlay Container */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-30
          transition-transform duration-700
          ${isSignUp ? "-translate-x-full" : ""}`}
        >
          <div
            className={`relative -left-full w-[200%] h-full flex
            transition-transform duration-700
            ${isSignUp ? "translate-x-1/2" : ""}`}
          >
            {/* Left Overlay */}
            <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white">
              <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-sm mb-6">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setType("signIn")}
                className="border border-white rounded-full px-10 py-3 text-xs font-bold uppercase tracking-wider hover:scale-95 transition"
              >
                Sign In
              </button>
            </div>

            {/* Right Overlay */}
            <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white">
              <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
              <p className="text-sm mb-6">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setType("signUp")}
                className="border border-white rounded-full px-10 py-3 text-xs font-bold uppercase tracking-wider hover:scale-95 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
