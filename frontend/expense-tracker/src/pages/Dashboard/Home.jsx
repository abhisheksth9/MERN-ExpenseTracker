import React, { useState, useContext } from "react";
import Navbar from "../../components/Layouts/Navbar";
import SideMenu from "../../components/Layouts/SideMenu";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/userContext";

const Home = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  useUserAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex pt-[64px]">
        <div
          className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] bg-white border-r border-gray-200 shadow-md
          transform transition-transform duration-300 ease-in-out z-30
          ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"}`}
        >
          <SideMenu
            activeMenu={activeMenu}
            closeSidebar={() => setIsSidebarOpen(false)}
          />
        </div>
        <div
          className={`flex-1 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        >
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;