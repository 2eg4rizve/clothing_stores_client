/* eslint-disable no-unused-vars */

import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAllShop from "../../hooks/useAllshop";


const AddProductPage = () => {

    const { user } = useContext(AuthContext);



    const [allShop, isLoading] = useAllShop();

    const alls = allShop;

    // console.log(allShop)

    if (isLoading) {
        return <p>Loading...............</p>
    }

    const myShop = alls.find(item => item.shopOwnerEmail == user.email)

    console.log("my shop : ", myShop);


    const currentDate = new Date();

    // Format the date as 'YYYY-MM-DD'
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate)



    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const productName = form?.productName?.value || "";
        const productImg = form?.productImg?.value || "";

        const productQuantity = form?.productQuantity?.value || "";
        const productLocation = form?.productLocation?.value || "";

        const productionCost = form?.productionCost?.value || "";
        const profitMargin = form?.profitMargin?.value || "";

        const productDiscount = form?.productDiscount?.value || "";
        const ProductDescription = form?.ProductDescription?.value || "";




        let x = productionCost ;
        let y = (productionCost * 0.075);
        let z= (productionCost * (profitMargin / 100));

        let m=Number(x)+Number(y)+Number(z);

        // console.log("x : ",x);
        // console.log("y : ",y);
        // console.log("z : ",z);
        // console.log("m : ",m);

       


        const shopID = myShop._id;
        const shopName = myShop.shopName;

        const shopOwnerEmail = myShop.shopOwnerEmail;
        const SellingPrice = m;

        console.log("SellingPrice : ",m);


        const productAddedDate = formattedDate;











        const newProduct = { productName, productImg, productQuantity, productLocation, productionCost, profitMargin, productDiscount, ProductDescription, shopID, shopName, shopOwnerEmail, SellingPrice,productAddedDate}



        console.log("newProduct : ",newProduct);



        fetch('https://clothing-stores-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Products add successfully',

                    })
                }
            })
    }
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">Add Product</p>

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
                            <input type="number" name='profitMargin' placeholder="Profit Margin " className="input input-bordered w-full" step="0.01" required />
                        </label>
                    </div>

                    {/*Product Discount */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Discount in %</span>
                        </label>
                        <label className="input-group text-are">
                            <input type="number" name='productDiscount' placeholder="Product Discount in %" 
                              className="input input-bordered w-full" step="0.01"  required />
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