import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "./hooks/useMediaQuery";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? (
    <div className="absolute">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded bg-gray-700 w-10 h-10 flex items-center justify-center"
      >
        <FaBars className="h-6 w-6" />
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gray-900 text-white transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>
    </div>
  ) : (
    <div className="h-full w-72 bg-gray-900 text-white flex flex-col items-center ">
      <SidebarContent />
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="p-8 space-y-4 w-full">
      <h1 className="text-lg">Three Body Simulator</h1>
      <button className="block p-2 hover:bg-gray-700 rounded w-full">Home</button>
      <button className="block p-2 hover:bg-gray-700 rounded w-full">Dashboard</button>
      <button className="block p-2 hover:bg-gray-700 rounded w-full">Settings</button>
    </div>
  );
}
