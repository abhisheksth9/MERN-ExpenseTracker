import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../components/Layouts/Navbar";
import SideMenu from "../../components/Layouts/SideMenu";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/userContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/Cards/InfoCard";
import { addThousandsSeperator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";

import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";

const Home = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);
    setError(null);
    
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

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
            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {!loading && !error && children}
            {/* {dashboardData && (
              <div>
                <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
              </div>
            )} */}
          </div>
        </div>
      </div>

      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon = {<IoMdCard />}
            label = "Total Balance"
            value = {addThousandsSeperator(dashboardData?.totalBalance ||  0)}
            color = "bg-primary"
          />

          <InfoCard
            icon = {<LuWalletMinimal />}
            label = "Total Income"
            value = {addThousandsSeperator(dashboardData?.totalIncome ||  0)}
            color = "bg-green-500"
          />

          <InfoCard
            icon = {<LuHandCoins />}
            label = "Total Balance"
            value = {addThousandsSeperator(dashboardData?.totalExpense ||  0)}
            color = "bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions
            transactions= {dashboardData?.recentTransactions}
            onSeeMore = {() => navigate("/expense")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
