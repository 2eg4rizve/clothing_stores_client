import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


// rizve@gmail.com
// 123456A!


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLink = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
            }
        >
            Home
        </NavLink>





        {/* {
            <NavLink
                to="/createShop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                Create-Shop
            </NavLink>


        } */}

        {/* {
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                Add-Product
            </NavLink>


        } */}

        {/* {
            <NavLink
                to="/myProducts"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                My-Products
            </NavLink>


        } */}

        {/* {
            <NavLink
                to="/productTable"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                Product-Table
            </NavLink>


        } */}

        {
            <NavLink
                to="/allProducts"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                All-Products
            </NavLink>


        }

        {
            user && <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                About
            </NavLink>


        }


        {
            <NavLink
                to="/contactUs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                Contact-Us
            </NavLink>


        }

        {
            <NavLink
                to="https://youtu.be/YRzkxLmZH9g?feature=shared"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                Watch-Demo
            </NavLink>


        }







        {
            <NavLink
                to="/dashBoard/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                DashBoard
            </NavLink>


        }

        {/* {
            <NavLink
                to="/dashBoard/productTable"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold mr-[20px]" : "mr-[20px]"
                }
            >
                Product-Table
            </NavLink>


        } */}










    </>


    return (
        <div className="mb-[50px] sticky top-0 z-50 ">

            <div className="navbar bg-[#EEF5FF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-[25px] h-[25px]" src="https://i.ibb.co/cbpN0pr/logo1.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">The Riz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[20px]">
                        {navLink}
                    </ul>
                </div>

                <div className="navbar-end ">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className=" flex flex-col justify-center">
                                        <p>{user.displayName}</p>

                                    </div>

                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                </div>

                                <div>

                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm  btn-primary bg-[#F4E869] text-black">Logout</button>

                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-[#F4E869] pb-[100px] z-20">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm btn-primary bg-[#F4E869] text-black">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <div>
                                <Link to='/login'>
                                    <button className="btn btn-sm  btn-primary bg-[#F4E869] text-black">Login</button>
                                </Link>
                                /
                                <Link to='/register'>
                                    <button className="btn btn-sm text-black btn-primary bg-[#F4E869]">Register</button>
                                </Link>

                            </div>




                    }
                </div>


            </div>

        </div>
    );
};

export default Navbar;