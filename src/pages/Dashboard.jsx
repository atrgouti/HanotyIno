import { useState, useContext } from "react";
import SideBar from "./DashboardComponents/SideBar";

import { ThemeUpdateContext } from "./ThemeContext";

function Dashboard() {
  const setActiveSide = useContext(ThemeUpdateContext);

  return (
    <div className="flex relative">
      {/* sidebar */}
      <SideBar />

      {/* main page */}
      <main className="w-full h-screen">
        {/* the nav bar changes on each page it's diffrente  */}
        <nav className="absolute top-0 left-0 h-24 w-screen ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer absolute right-4 top-6 lg:hidden"
            onClick={() => setActiveSide(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <button className="hidden bg-indigo-700 text-white absolute top-4 right-14 py-2 px-4 rounded-2xl lg:right-4 sm:block">
            Add order
          </button>
        </nav>
        {/* the main content for the dashboard page  */}
        <h1 className="my-6 mx-4 font-bold text-indigo-700">
          WELCOME TO YOUR DASHBOARD
        </h1>
        <div className="flex justify-between flex-wrap w-11/12 mx-auto">
          <div className=" h-24 w-1/5 min-w-40  bg-indigo-500 rounded flex justify-center items-center flex-col my-4">
            <div className="flex">
              <p className="text-white pr-2">TOTAL REVENUE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h1 className="text-white">MAD 17,920</h1>
          </div>
          <div className=" h-24 w-1/5 min-w-40 bg-indigo-500 rounded ml-6 flex justify-center items-center flex-col my-4 ">
            <div className="flex">
              <p className="text-white pr-2">TOTAL CLIENTS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
            </div>
            <h1 className="text-white">24</h1>
          </div>
          <div className=" h-24 w-1/5 min-w-40 bg-indigo-500 rounded flex justify-center items-center flex-col my-4">
            <div className="flex">
              <p className="text-white pr-2">TOTAL PRODUCTS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <h1 className="text-white">49</h1>
          </div>
          <div className=" h-24 w-1/5 min-w-40 bg-indigo-500 rounded flex justify-center items-center flex-col my-4 ">
            <div className="flex">
              <p className="text-white pr-2">TOTAL SUPPLIERS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h1 className="text-white">3</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
