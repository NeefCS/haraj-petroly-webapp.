import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0d6d65] text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-300">
        Haraj Petroly
      </div>

      {/* Search */}
      <div className="flex flex-1 justify-center">
        <input 
          type="text" 
          placeholder="Search items..."
          className="w-full md:w-1/2 px-4 py-2 rounded-full text-black focus:outline-none"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 text-lg">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
        <Link to="/messages" className="hover:text-yellow-300">Messages</Link>
        <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
      </div>
    </nav>
  );
}
