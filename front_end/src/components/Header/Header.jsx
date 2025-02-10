
"use client";

import { Avatar, Dropdown, Modal, Navbar } from "flowbite-react";
import Logo from "/images/homepage/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import SignIn from "../SignInOut/SignIn";
import SignUp from "../SignInOut/SignUp";
export default function Header() {
    const menuElement = useRef(null);
    const barElement = useRef(null);
    const [showLogin, setShowLogin] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleMenu = () => {
        console.log(menuElement.current.classList);
        menuElement.current.classList.toggle('h-0');
        menuElement.current.classList.toggle('h-[calc(100vh-57px)]');
    }
    const changeForm = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <>

            <header className="fixed top-0 right-0 left-0 z-[49]" >
                <div className=" max-xl:py-2 xl:px-8 px-4 bg-white h-[57px] flex justify-between items-center">
                    <div className="left h-full">
                        <img loading='lazy' src={Logo} alt="" className="h-full" />
                    </div>
                    <div className="menu center max-xl:hidden h-full">
                        <ul className="flex h-full">

                            <NavLink to="/" className={({ isActive, isPending }) => (`px-5 flex items-center  font-semibold hover:underline-offset-2 hover:underline ${isActive ? "bg-gray-300" : ""}`)}>Home</NavLink>


                            <NavLink to="/cards" className={({ isActive, isPending }) => (`px-5 flex items-center font-semibold hover:underline-offset-2 hover:underline ${isActive ? "bg-gray-300" : ""}`)}>Cards</NavLink>


                            <NavLink to="/" className={({ isActive, isPending }) => (`px-5 flex items-center  font-semibold hover:underline-offset-2 hover:underline ${isActive ? "bg-gray-300" : ""}`)}>About</NavLink>


                            <NavLink to="/" className={({ isActive, isPending }) => (`px-5 flex items-center font-semibold hover:underline-offset-2 hover:underline  ${isActive ? "bg-gray-300" : ""}`)}>Contact</NavLink>

                        </ul>
                    </div>
                    <div className="right flex items-center gap-2">
                        <button className="xl:px-5 xl:py-3 px-3 py-2 max-xl:text-sm font-semibold bg-gray-200 hover:bg-gray-300 rounded-full" onClick={() => setShowLogin(!showLogin)}>Log in</button>
                        <button className="xl:hidden" onClick={toggleMenu}>
                            <FaBars className="h-8 w-8" />
                        </button>
                    </div>
                </div>
                <div className="w-full  overflow-hidden bg-white h-0 transition-all flex justify-between flex-col" ref={menuElement} >
                    <div className="">
                        <NavLink onClick={toggleMenu} to="/" className={({ isActive, isPending }) => (`active:bg-gray-200 block ${isActive ? "bg-gray-300 underline underline-offset-2" : ""}`)} >
                            <div className="flex justify-between items-center font-semibold p-3">
                                <div className="flex items-center">

                                    <IoHomeOutline className="h-5 w-5" />


                                    <p className="ml-2">Home</p>
                                </div>
                                <div>
                                    <FaChevronRight className="h-5 w-5" />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink onClick={toggleMenu} to="/cards" className={({ isActive, isPending }) => (`active:bg-gray-200 block ${isActive ? "bg-gray-300 underline underline-offset-2" : ""}`)} >
                            <div className="flex justify-between items-center font-semibold p-3">
                                <div className="flex items-center">

                                    <FaRegEnvelope className="h-5 w-5" />


                                    <p className="ml-2">Cards</p>
                                </div>
                                <div>
                                    <FaChevronRight className="h-5 w-5" />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink onClick={toggleMenu} to="/about" className={({ isActive, isPending }) => (`active:bg-gray-200 block ${isActive ? "bg-gray-300 underline underline-offset-2" : ""}`)} >
                            <div className="flex justify-between items-center font-semibold p-3">
                                <div className="flex items-center">

                                    <RiEmotionHappyLine className="h-5 w-5" />


                                    <p className="ml-2">About</p>
                                </div>
                                <div>
                                    <FaChevronRight className="h-5 w-5" />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink onClick={toggleMenu} to="/contact" className={({ isActive, isPending }) => (`active:bg-gray-200 block ${isActive ? "bg-gray-300 underline underline-offset-2" : ""}`)} >
                            <div className="flex justify-between items-center font-semibold p-3">
                                <div className="flex items-center">

                                    <BsTelephone className="h-5 w-5" />


                                    <p className="ml-2">Contact</p>
                                </div>
                                <div>
                                    <FaChevronRight className="h-5 w-5" />
                                </div>
                            </div>
                        </NavLink>



                    </div>
                    <div className="mb-5 px-3">
                        <button className="w-full bg-thirdColor text-white py-3 rounded-full mb-">
                            Login
                        </button>
                    </div>
                </div>
                <Modal show={showLogin} onClose={() => setShowLogin(false)}>
                    <Modal.Header className="py-4">
                        <img loading='lazy' src={Logo} alt="" className="h-8" />
                        <h1 className="text-2xl">{isSignIn ? 'Login' : 'Registration'}</h1>
                    </Modal.Header>
                    <Modal.Body>
                        {isSignIn ? <SignIn changeForm={changeForm} /> : <SignUp changeForm={changeForm} />}
                    </Modal.Body>

                </Modal>
            </header>


        </>
    );
}
