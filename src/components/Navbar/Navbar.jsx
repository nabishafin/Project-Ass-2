import React from 'react';
import logo from "../../../public/logo.svg"

const Navbar = () => {
    return (

        <nav className=''>
            <div
                className="flex max-w-7xl items-center  w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto"
            >
                {/* <!-- Logo --> */}
                <div>
                    <img src={logo} />
                </div>

                {/* <!-- Menu --> */}
                <div className="hidden md:block">
                    <ul className="flex gap-4 text-gray-500 font-medium">
                        <li>Home</li>
                        <li>App</li>
                        <li>Account</li>
                        <li>Export</li>
                    </ul>
                </div>

                {/* <!-- Button --> */}
                <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">Get App</div>
            </div>
        </nav>

    );
};

export default Navbar;