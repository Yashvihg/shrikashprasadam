import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Cart from "../assets/shared/Cart.svg";
import List from "../assets/shared/bag.png";
import logo from "../assets/shared/logo.svg";
import Bg from "../assets/shared/bg.svg"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchQuery = formData.get('search');
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <>
            <nav
                className="relative  px-4 py-4 font-inter bg-[#FFF8E9] flex justify-between items-center"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <a href="#">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                </a>
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-[#F26414] p-1"
                        id="navbar_burger"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="block h-6 w-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:space-x-6">
                    <li>
                        <div className="relative flex items-center mx-auto text-gray-600">
                            <form onSubmit={handleSearch} className="relative flex items-center mx-auto text-gray-600">
                                <input
                                    className="border font-inter border-[#F26414] bg-[#FFF8E9] rounded-3xl placeholder-current h-12 w-[50rem] px-8 pl-14  text-base focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search for names......"
                                />
                                <button type="submit" className="absolute left-0 top-0 mt-3 ml-4">
                                    <svg
                                        className="text-orange-600  h-6 w-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 56.966 56.966"
                                    >
                                        <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c5.428 0 10.642-1.911 14.786-5.396l13.557 14.101c0.571 0.593 1.339 0.92 2.162 0.92 0.779 0 1.518-0.297 2.084-0.837 1.225-1.17 1.276-3.093 0.107-4.317zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
                                    </svg>
                                </button>
                                <button className="mx-4 mr-4">
                                    <img src={Cart} alt="Cart" className="h-full ml-14 w-auto" />
                                </button>
                                <button>
                                    <img src={List} alt="List" className="h-full mx-4 w-auto" />
                                </button>
                            </form>

                        </div>

                    </li>
                </ul>


                {/* cart and list buttons */}
                <div className="hidden lg:flex">
                    <div className="flex  pr-44 space-x-8">

                    </div>
                    <a href="">
                        <button className=" py-3 w-24 m-1 text-xl text-center font-bold bg-[#F26414] border rounded-md text-white  hover:bg-orange-400">
                            Log in
                        </button>
                    </a>
                </div>

            </nav >
            {/* mobile navbar */}
            <div div className={`navbar-menu relative z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
                <nav className="fixed bg-white top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a href="#" className='mr-auto'>
                            <img src={logo} alt="Logo" className="h-12 w-auto" />
                        </a>
                        <button className="navbar-close" onClick={closeMobileMenu}>
                            <svg
                                className="h-6 w-6  text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className=" relative mx-auto text-gray-600">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                className="border-2  border-[#F26414] rounded-3xl bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg
                                    className=" text-[#F26414] h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                    xmlSpace="preserve"
                                    width="512px"
                                    height="512px"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a
                                className="block py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100"
                                href="/login"
                            >
                                Sign in
                            </a>
                            <a
                                className="block py-1.5 px-3 m-1 text-center font-bold bg-[#F26414] border rounded-md text-white  hover:bg-orange-400"
                                href="https://tailwindflex.com/playground"
                            >
                                Log in
                            </a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>© 2024 3i Consulting Pvt. Ltd. All rights reserved.</span>
                        </p>
                    </div>
                </nav>
            </div >
        </>
    );
};

export default Navbar;
