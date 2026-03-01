import React, { useContext } from "react";
import SIDE_MENU_DATA from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ activeMenu, closeSidebar }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      localStorage.clear();
      clearUser();
      navigate("/signin");
    } else {
      navigate(route);
    }
    closeSidebar();
  };

  return (
    <div className="h-full p-5 flex flex-col">

      <div className="flex flex-col items-center mb-8">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold">
            {user?.fullName?.charAt(0)}
          </div>
        )}

        <h5 className="mt-3 font-medium text-gray-800">
          {user?.fullName}
        </h5>
      </div>

      <div className="flex flex-col gap-2">
        {SIDE_MENU_DATA.map((item, index) => {
          const isActive = activeMenu === item.label;
          return (
            <button
              key={index}
              onClick={() => handleClick(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm
              ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="text-lg" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;