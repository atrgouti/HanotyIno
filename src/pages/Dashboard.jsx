function Dashboard() {
  return (
    <div>
      <div className="h-screen bg-indigo-500 w-1/5 relative">
        <img
          className="mx-auto h-20 w-auto absolute top-0 left-4 "
          src="/dashboardLogo.svg"
          alt="Your Company"
        />
        <div className="w-10/12 pt-24 mx-auto ">
          <div className="flex hover:bg-indigo-700 cursor-pointer p-2 rounded-xl">
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p className="text-white pl-2 font-bold">Dashboard</p>
          </div>

          <div className="flex hover:bg-indigo-700 mt-6 cursor-pointer p-2 rounded-xl">
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
            <p className="text-white pl-2 font-bold">Clients</p>
          </div>
        </div>
      </div>
      <div className="h-screen w-4/5"></div>
    </div>
  );
}

export default Dashboard;
