function Dashboard() {
  return (
    <div>
      <div className="h-screen bg-indigo-500 w-1/5 relative">
        <img
          className="mx-auto h-20 w-auto absolute top-0 left-4 "
          src="/dashboardLogo.svg"
          alt="Your Company"
        />
      </div>
      <div className="h-screen w-4/5"></div>
    </div>
  );
}

export default Dashboard;
