/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyProductDetails = ({ item, AllProductsRefetch }) => {

    const { _id, productName, productImg, productQuantity } = item || " ";
    // console.log(productImg)

    const handleDelete = id => {

        console.log("1st : ", id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log("2nd : ",id);
                fetch(`https://clothing-stores-server.vercel.app/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        AllProductsRefetch()

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )

                        }
                        

                    })

            }
        });
    }
    return (
        <div>

            <div className="card bg-[#F3EEEA] shadow-xl mt-[50px]">
                <figure><img className="h-[200px] w-full object-contain" src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                    </h2>
                    <p>product Quantity : {productQuantity}</p>
                    <p>Sale Count : 0 </p>

                    <div className="card-actions justify-end">

                        <Link to={`/productUpdate/${_id}`} >

                            <button className="btn badge badge-outline"> Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn badge badge-outline "> Delete </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProductDetails;