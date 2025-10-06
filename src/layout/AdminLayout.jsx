import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { FaUpload, FaClipboardList, FaTrash } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Login from "../pages/Login";

const AdminLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Upload Product", to: "/admin", icon: <FaUpload /> },
    { name: "View Orders", to: "/admin/view-orders", icon: <FaClipboardList /> },
    { name: "Delete/Update Product", to: "/admin/delete-update-product", icon: <FaTrash /> },
  ];

  // --------------------------- Handle login 
  const [username, setUsername] = useState("");
const [pass, setPass] = useState("");
const [correct, setCorrect] = useState(false);

const handleLogin = (e) => {
  e.preventDefault();

  if (username === "munna" && pass === "Munna@2025!") {
    setCorrect(true);
  }
};

  return (
    <>
      {
      correct?
      <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside
              className={`fixed top-0 left-0 h-screen w-72 bg-gray-900 text-white p-4 shadow-lg z-50 transform transition-transform duration-300 
              ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
              {/* Close Button for mobile */}
              <button
                className="md:hidden absolute top-5 right-5 text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <FiX />
              </button>

              <h2 className="text-3xl font-bold mb-8 md:text-center tracking-wide">
                Admin Panel
              </h2>
              <nav className="flex flex-col gap-3">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.to}
                    onClick={() => setIsOpen(false)} // auto close on mobile
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      location.pathname === link.to
                        ? "bg-blue-600 shadow-md"
                        : "hover:bg-gray-700 hover:translate-x-1"
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-6 left-2 text-center text-gray-400 text-sm">
                &copy; 2025 Admin Panel By Munna-Scriptz
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-100 min-h-screen rounded-l-3xl shadow-inner md:ml-72 relative">
              {/* Mobile Menu Button */}
              <div className="bg-blue-600 text-white w-full h-[65px] flex items-center justify-between px-4 md:hidden">
                <h2 className="text-lg font-bold text-center tracking-wide">
                  Admin Panel
                </h2>
                <button
                  className="md:hidden text-3xl cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <FiMenu />
                </button>
              </div>
              <Outlet />
            </main>

            {/* Dark overlay when sidebar open on mobile */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              ></div>
            )}
      </div>
      :
      <Login username={(e)=>setUsername(e.target.value)} password={(e)=>setPass(e.target.value)} submit={handleLogin}/>
      }
    </>
  );
};

export default AdminLayout;
