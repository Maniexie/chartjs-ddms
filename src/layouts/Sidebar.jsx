import React from 'react';
import useHeaderTitle from '../utils/useHeaderTitle';
import { user } from "../utils/user"



const Sidebar = ({ children }) => {
    const headerTitle = useHeaderTitle();

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-5 max-md:hidden">
                <div className='flex flex-col'>
                    <h1 className='mt-2 p-2'>LOGO</h1>
                    <hr />
                    <a href="/dashboard" className='hover:bg-gray-600 p-2 w-full mt-1'>Dashboard</a>
                    <a href="/report" className='hover:bg-gray-600 p-2 w-full'>Report</a>
                    <a href="/managementuser" className='hover:bg-gray-600 p-2 w-full'>Management User</a>
                </div>
            </div>

            {/* Navbar */}
            {/* <div className="md:hidden w-64 bg-gray-900 text-white p-5">
                <div className='flex flex-col'>
                    <h1 className='mt-2 p-2'>LOGO</h1>
                    <hr />
                    <a href="/dashboard" className='hover:bg-gray-600 p-2 w-full mt-1'>Dashboard</a>
                    <a href="/report" className='hover:bg-gray-600 p-2 w-full'>Report</a>
                    <a href="/managementuser" className='hover:bg-gray-600 p-2 w-full'>Management User</a>
                </div>
            </div> */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <nav className="bg-gray-900 text-white p-5 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{headerTitle}</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">Welcome, User  {user.name}</span>
                        <img
                            src={user.avatar}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                    </div>
                </nav>

                {/* Content */}
                <div className="flex-1 p-5 bg-gray-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
