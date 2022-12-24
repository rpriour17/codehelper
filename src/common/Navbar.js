import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <a href="#" className="text-white font-bold">
        My App
      </a>
      <div className="flex">
        <a href="#" className="px-4 py-2 text-white hover:bg-gray-700 rounded-full">
          Home
        </a>
        <a href="#" className="px-4 py-2 text-white hover:bg-gray-700 rounded-full">
          About
        </a>
        <a href="#" className="px-4 py-2 text-white hover:bg-gray-700 rounded-full">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;