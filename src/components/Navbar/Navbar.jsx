import React, { useState , useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBasketFill } from "react-icons/ri";
import { RxDropdownMenu } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [showMenu, setshowMenu] = useState(false);
    const [isScrolled , setisScrolled] = useState(false);

    useEffect(()=>{
        const scrollHandle = () =>{
            setisScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll' , scrollHandle)
        return ()=> window.removeEventListener('scroll', scrollHandle);
    } , []); 

    const toggleMenu = () => {
        setshowMenu(!showMenu);
    }

    return (
        <>
            <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${ isScrolled ? 'shadow-lg' : "" }`} >
                <nav className='flex justify-between sm:py-6 py-8 px-5 items-center bg:white'>

                    {/* logo */}

                    <Link to="/" className='text-3xl font-semibold'>
                        Gr<span className='text-orange-500'>O</span>cify
                    </Link>

                    {/* Dekstop Navbar menu */}

                    <ul className=" md:flex gap-x-15 hidden m-2">
                        <li>
                            <a href="#" className='font-semibold tracking-wider  text-orange-500'>Home</a>
                        </li>
                        <li>
                            <a href="#About" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                        </li>
                        <li>
                            <a href="#Process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                        </li>
                        {/* <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                        </li> */}
                    </ul>

                    {/* Navbar Action */}

                    <div className='flex items-center gap-2'>
                        <div className='rounded-full border-2 border-orange-500 p-3 md:flex hidden items-center'>
                            <input type='text' placeholder='Search...' className='focus:outline-none'></input>
                            <button className=' bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                                <a href="#"><FaSearch /></a>
                            </button>
                        </div>

                        <a href='#' className='text-3xl'><FaHeart /></a>
                        <a href='#' className='text-3xl'><RiShoppingBasketFill /></a>
                         <a href='#' className='text-3xl md:hidden' onClick={toggleMenu}>
                            {showMenu ? <RxDropdownMenu /> : <FiMenu /> }
                        </a>
                       
                    </div>


                    {/* Navbar for mobile */}



                    <ul className={`flex flex-col items-center  md:hidden gap-y-15  absolute bg-orange-500/30 shadow-xl p-10 rounded-2xl top-30 -left-full transform -translate-x-1/2 backdrop-blur-xl transition-all duration-500 tra ${showMenu ? 'left-1/2' : ""}`}>
                        <li>
                            <a href="#" className='font-semibold tracking-wider  text-orange-500'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                        </li>
                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                        </li>
                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                        </li>






                        <li className='rounded-full border-2 border-zinc-700 p-3 flex md:hidden items-center'>
                            <input type='text' placeholder='Search...' className='focus:outline-none'></input>
                            <button className=' bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                                <a href="#"><FaSearch /></a>
                            </button>
                        </li>

                    </ul>

                </nav>
            </header>

        </>
    )
}

export default Navbar;