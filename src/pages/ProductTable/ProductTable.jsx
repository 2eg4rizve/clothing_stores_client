/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAllProducts from "../../hooks/useAllProducts";
import Swal from "sweetalert2";


const ProductTable = () => {

    const { user } = useContext(AuthContext);

    const [allProducts, AllProductsLoading, AllProductsRefetch] = useAllProducts();

    if (AllProductsLoading) {
        return <p>Loading...............</p>
    }

    // console.log(allProducts);

    const MyProducts = allProducts.filter(product => product.shopOwnerEmail == user.email)

    // console.log(MyProducts);

    const handleCheckOut = (item) => {
        console.log(item._id)
        let x = item.productQuantity;
        console.log(x);

        const productQuantity=x-1;
       
        const newProduct = { productQuantity }
        // Swal.fire({
        //     title: "Successfully Check Out",
        //     text: "Thanks ",
        //     icon: "success"
        // });
        fetch(`https://clothing-stores-server.vercel.app/products/${item._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("update product data : ", data)
                AllProductsRefetch();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Successfully Check Out',
                        confirmButtonText: 'cool'

                    })
                }
            })


    }

    return (
        <div>
            <p className="text-5xl font-bold text-center my-[40px] pt-[20px]">Product Table</p>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Quantity</th>
                            <th>Discount</th>
                            <th>Selling-Price</th>
                            <th>Check-out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyProducts.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item._id}
                                </td>
                                <td>
                                    {item.productName}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.productImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>{item.productQuantity}</td>

                                <td>{item.productDiscount}%</td>

                                <td>${item.SellingPrice}</td>


                                <th>
                                    <button onClick={() => handleCheckOut(item)} className="btn btn-ghost btn-sm">
                                        Check-out
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;