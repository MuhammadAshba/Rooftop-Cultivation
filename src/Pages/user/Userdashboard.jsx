
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`w-64 pt-[30px] lg:pt-0 bg-gray-800 text-white h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${
          isSidebarOpen ? '' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <h1 className='pt-6 text-2xl font-bold text-center '>User Dashboard</h1>
            
            <ol className='pt-3 text-lg cursor-pointer'>
                <li className='pt-4 pl-6 rounded-md hover:bg-green-500'>Orders</li>
                <li className='pt-4 pl-6 rounded-md hover:bg-green-500'>Payments history</li>
                <li className='pt-4 pl-6 rounded-md hover:bg-green-500'>Profile</li>
                <li className='pt-4 pl-6 rounded-md hover:bg-green-500'>Notifications</li>
            </ol>
      </aside>

      {/* Main Content */}
      <div className="p-4 ml-64 lg:pl-0">
        {/* Main content goes here */}
      </div>

      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="fixed p-2 bg-green-500 rounded lg:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
       <FaBars className="text-white"/>
       
      </button>
    </div>
  );
};

export default Userdashboard;
