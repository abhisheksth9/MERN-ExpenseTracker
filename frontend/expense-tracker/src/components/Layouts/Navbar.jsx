import React from "react";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[64px] px-6 bg-white border-b border-gray-200 shadow-sm flex items-center z-50">

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center"
      >
        <span
          className={`absolute w-6 h-[2px] bg-black transform transition duration-300
          ${isSidebarOpen ? "rotate-45" : "-translate-y-2"}`}
        />
        <span
          className={`absolute w-6 h-[2px] bg-black transition duration-300
          ${isSidebarOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`absolute w-6 h-[2px] bg-black transform transition duration-300
          ${isSidebarOpen ? "-rotate-45" : "translate-y-2"}`}
        />
      </button>

      <h2 className="ml-4 text-lg font-semibold text-gray-800">
        Expense Tracker
      </h2>
    </div>
  );
};

export default Navbar;