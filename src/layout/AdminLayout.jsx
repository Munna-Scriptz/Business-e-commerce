import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { FaUpload, FaClipboardList, FaTrash } from 'react-icons/fa';

const AdminLayout = () => {
  const location = useLocation();

  const links = [
    { name: "Upload Product", to: "/admin", icon: <FaUpload /> },
    { name: "View Orders", to: "/admin/view-orders", icon: <FaClipboardList /> },
    { name: "Delete/Update Product", to: "/admin/delete-update-product", icon: <FaTrash /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-74 bg-gray-900 text-white p-6 sticky top-0 flex flex-col h-screen shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
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
        <div className="mt-auto text-center text-gray-400 text-sm">
          &copy; 2025 Admin Panel By Munna-Scriptz
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 min-h-screen rounded-l-3xl shadow-inner">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
