import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto mt-[50px]">
            <div className="w-64 min-h-screen bg-blue-300 mr-[20px] ">
                <ul className="menu">

                    <li><NavLink to="/dashboard/cart">My Cart</NavLink> </li>
                    
                    
                    <li><NavLink to="/dashboard/createShop">Create-Shop</NavLink> </li>


                    <li><NavLink to="/dashboard/addProduct">Add-Product</NavLink> </li>


                    
                    <li><NavLink to="/dashboard/productTable">Product Table</NavLink> </li>

                    <li><NavLink to="/dashboard/myProducts">My-Products</NavLink> </li>

                    <div className="divider"></div>


                    <li><NavLink to="/">Home</NavLink> </li>



                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;