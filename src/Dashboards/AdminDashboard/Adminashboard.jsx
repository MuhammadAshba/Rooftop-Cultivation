
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { FcApprove } from 'react-icons/fc';
import { GiProfit } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { TbLockSquareRounded } from 'react-icons/tb';



 
const Admindashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`pt-[30px] w-[243px] rounded lg:pt-0 bg-green-600 text-white h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${isSidebarOpen ? 'w-[300px]' : '-translate-x-full '
          } lg:translate-x-0`}
      >
        <h1 className='pt-8 text-2xl font-bold text-center '>Admin Dashboard</h1>

        <ol className='pt-5 text-lg cursor-pointer'>
          
            <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< MdSpaceDashboard className="inline text-white" />
            &nbsp; Dashboard</li>
            <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< FcApprove className="inline text-white" />
            &nbsp; Approve sellers</li>
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'> < GiProfit className="inline text-white" /> &nbsp;
            Profit</li>
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< FaUsers className="inline text-white" /> &nbsp;
            Users</li>
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< TbLockSquareRounded className="inline text-white" /> &nbsp;
            Restrict Users</li>
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< CgProfile  className="inline text-white" /> &nbsp;
            Profile</li>
        </ol>
      </aside>

      {/* Main Content */}
      <div className={`p-4 lg:ml-64 lg:md-64 lg:pl-0 w-65 sm:w-[100vw] mt-10 lg:mt-0 lg:w-[cal(100vw-243px)] `}>
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">New users annually</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
              </div>
            </dl>
          </div>
        </div>

      </div>

      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="fixed p-2 bg-green-500 rounded lg:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
        <FaBars className="text-white" />

      </button>
    </div>
  );
};

export default Admindashboard;
