/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddProductPage = () => {

    const { user } = useContext(AuthContext);

    useEffect(()=>{
        
    },[])

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const productName = form.productName.value || "";
        const productImg = form.productImg.value || "";

        const productQuantity = form.productQuantity.value || "";
        const productLocation = form.productLocation.value || "";

        const productionCost = form.productionCost.value || "";
        const profitMargin = form.profitMargin.value || "";

        const productDiscount = form.productDiscount.value || "";
        const ProductDescription = form.ProductDescription.value || "";

       


        const newProduct = { shopName, shopLogo, shopInfo, shopLocation, shopOwnerEmail, shopOwnerName }

        console.log(newProduct);



        fetch('http://localhost:5000/shops', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newShop)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Shop add successfully',

                    })
                }
            })
    }
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">Create Shop</p>

            <div className="bg-[#CAEDFF] p-10 text-black">


                <form onSubmit={handleAdd}>

                    {/*Product Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='productName' placeholder="Product Name" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/* Product Img */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text"> Product Img</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='productImg' placeholder=" Product Img" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/*Product Quantity */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='productQuantity' placeholder="Product Quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/*Product Location */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='productLocation' placeholder="Product Location" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/* Production Cost */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Production Cost </span>
                        </label>
                        <label className="input-group text-are">
                            <input type="number" name='productionCost' placeholder="Production Cost" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/* Profit Margin */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Profit Margin </span>
                        </label>
                        <label className="input-group text-are">
                            <input type="number" name='profitMargin' placeholder="Profit Margin " className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/*Product Discount */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Discount in %</span>
                        </label>
                        <label className="input-group text-are">
                            <input type="number" name='productDiscount' placeholder="Product Discount in %" className="input input-bordered w-full" required />
                        </label>
                    </div>




                    {/*Product Description  */}
                   <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <label className="input-group text-are">
                            <input type="text" name='ProductDescription' placeholder="Product Description" className="input input-bordered w-full" required />
                        </label>
                    </div>




                    <input type="submit" value="ADD Product" className="btn btn-block btn-primary mt-[20px]" />


                </form>

            </div>


        </div>
    );
};

export default AddProductPage;