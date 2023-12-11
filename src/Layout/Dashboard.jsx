import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    let isAdmin = 0;

    // if(user.email=="rizve@gmail.com"){
    //     isAdmin = 1;

    // }

    if (user.email == "rizve@gmail.com") {
        isAdmin = 1;

    }



    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mt-[50px]">

            <Helmet>
                <title>Riz Shop || Dashboard</title>

            </Helmet>
            {/* <p>{user.email}</p>
            <p>isAdmin : {isAdmin}</p> */}
            <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/cart">My Cart</NavLink> </li>
                            <li><NavLink to="/dashboard/manageShop">Manage Shop</NavLink> </li>
                            <li><NavLink to="/dashboard/salesView">Sales View</NavLink> </li>
                            <li><NavLink to="/dashboard/userSection">All Users</NavLink> </li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/cart">My Cart</NavLink> </li>


                                <li><NavLink to="/dashboard/createShop">Create-Shop</NavLink> </li>


                                <li><NavLink to="/dashboard/addProduct">Add-Product</NavLink> </li>

                                <li><NavLink to="/dashboard/myProducts">My-Products</NavLink> </li>

                                <li><NavLink to="/dashboard/productTable">Check-Out</NavLink> </li>

                                <li><NavLink to="/dashboard/subscription">Subscription & Payment</NavLink> </li>

                                <li><NavLink to="/dashboard/SalesCount">Sales Count</NavLink> </li>

                                <li><NavLink to="/dashboard/salesHistory">Sales History</NavLink> </li>
                            </>
                    }



                    <div className="divider"></div>


                    <li><NavLink to="/">Home</NavLink> </li>
                    <li><NavLink to="/contactUs">Contact-Us</NavLink> </li>



                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;