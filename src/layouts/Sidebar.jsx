import React, { useState } from 'react';
import useHeaderTitle from '../utils/useHeaderTitle';
import { user } from "../utils/user"
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'


const Sidebar = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const headerTitle = useHeaderTitle();

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-5 max-md:hidden">
                <div className='flex flex-col'>
                    <h1 className='mt-2 p-2 mb-2'>LOGO</h1>
                    <hr className='' />
                    <a href="/dashboard" className='hover:bg-gray-600 hover:rounded-lg p-2 w-full mt-1'>Dashboard</a>
                    <a href="/report" className='hover:bg-gray-600 hover:rounded-lg p-2 w-full'>Report</a>
                    <a href="/managementuser" className='hover:bg-gray-600 hover:rounded-lg p-2 w-full'>Management User</a>
                </div>
            </div>


            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header (Laptop / PC / Tablet) */}
                <nav className="bg-gray-900 text-white p-5 flex justify-between items-center max-md:hidden">
                    <h2 className="text-lg font-semibold">{headerTitle}</h2>
                    <div className="flex items-center space-x-4">
                        <h1 className="font-semibold text-lg">Welcome, <span className='font-bold'>{user.name}</span></h1>
                        <img
                            src={user.avatar}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                    </div>
                </nav>

                {/* Header (Mobile) */}
                <nav className="bg-gray-900 text-white p-5 flex justify-between items-center md:hidden">
                    <h2 className="text-lg font-semibold">{headerTitle}</h2>
                    <ul>
                        <li className="md:hidden md:p-0 ">
                            <Hamburger
                                size={25}
                                color="white"
                                toggled={isOpen}
                                toggle={setOpen}
                            />
                        </li>
                    </ul>
                    <ul
                        className={`absolute top-16 left-0 border-t-4 border-t-amber-50 divide-y-2 hover:divide-amber-200  w-full bg-gray-900 p-3  md:hidden transition-all duration-300 ease-in-out ${isOpen
                            ? "block transition-all duration-300 ease-in-out"
                            : "hidden transition-all duration-300 ease-in-out"
                            }`}
                    >
                        {/* mobile */}
                        <li className=" ">
                            <a href="/dashboard" className='hover:bg-cyan-600 hover:rounded-md p-3 hover:p-1 w-full ' onClick={() => setOpen(false)}>Dashboard</a>
                        </li>
                        <li className=" ">
                            <a href="/report" className='hover:bg-cyan-600 hover:rounded-md p-3 hover:p-1 w-full ' onClick={() => setOpen(false)}>Report</a>
                        </li>
                        <li className=" ">
                            <a href="/managementuser" className='hover:bg-cyan-600 hover:rounded-md p-3 hover:p-1 w-full ' onClick={() => setOpen(false)}>Management User</a>
                        </li>
                        <li>
                            <h1 className="py-1 px-3 font-semibold text-lg">Welcome, <span className='font-bold'>{user.name}</span></h1>
                        </li>
                    </ul>
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
