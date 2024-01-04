import { useState } from "react";
import SideBar from "./SideBar";
function Dashboard() {
  const [activeSide, setActiveSide] = useState(false);
  return (
    <div className="flex relative">
      {/* sidebar */}
      <SideBar setActiveSide={setActiveSide} activeSide={activeSide} />

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
        <h1 className="my-6 mx-4 font-bold text-indigo-700">
          WELCOME TO YOUR DASHBOARD
        </h1>
      </main>
    </div>
  );
}

export default Dashboard;
