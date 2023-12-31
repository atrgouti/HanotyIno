import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Routes>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
