import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Students from "./pages/Students";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold">🎓 StudentApp</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/add" className="hover:text-blue-400">Add</Link>
            <Link to="/students" className="hover:text-blue-400">Students</Link>
          </div>
        </nav>

        {/* Pages */}
        <div className=" flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add students={students} setStudents={setStudents} />} />
            <Route path="/students" element={<Students students={students} setStudents={setStudents} />} />
          </Routes>
        </div>

        <footer className="text-center text-gray-500 py-4">
  © 2026 StudentApp | Built with React & Tailwind
</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;