/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";
import { useEffect } from "react";
import Swal from "sweetalert2";


const ProductUpdate = () => {


    const { id } = useParams();

    const [allProducts, AllProductsLoading, AllProductsRefetch] = useAllProducts();

    if (AllProductsLoading) {
        return <p>Loading...............</p>
    }

    // useEffect(() => {
    //     const rec = books?.filter(item => item._id == id)
    //     setNowBook(rec)
    // }, [books, id])

    const myProducts = allProducts.filter(product => product._id == id);

    console.log(myProducts);


    const handleUpdate = event => {
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




        let x = productionCost ;
        let y = (productionCost * 0.075);
        let z= (productionCost * (profitMargin / 100));

        let m=Number(x)+Number(y)+Number(z);

        // console.log("x : ",x);
        // console.log("y : ",y);
        // console.log("z : ",z);
        // console.log("m : ",m);

    
     
        const SellingPrice = m;

        // console.log("SellingPrice : ",m);


        const newProduct = { productName, productImg, productQuantity, productLocation, productionCost, profitMargin, productDiscount, ProductDescription,SellingPrice}



        console.log("newProduct : ",newProduct);

        fetch(`https://clothing-stores-server.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("update product data : ", data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Product Updated successfully',
                        confirmButtonText: 'cool'

                    })
                }
            })


       

       




    }




    return (
        <div>
            <p>id: {id}</p>

            <div>
                <p className="text-5xl font-bold text-center my-[20px] pt-[20px]">Product Update</p>

                <div className="bg-[#EEEEEE] p-10 text-black">


                    <form onSubmit={handleUpdate}>


                        {/*Product Name  */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='productName' defaultValue={myProducts[0]?.productName} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/*product Img  */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Img</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='productImg' defaultValue={myProducts[0]?.productImg} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/*productQuantity  */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='productQuantity' defaultValue={myProducts[0]?.productQuantity} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/*product Location  */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='productLocation' defaultValue={myProducts[0]?.productLocation} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/*Production Cost */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='productionCost' defaultValue={myProducts[0]?.productionCost} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/*Profit Margin */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Profit Margin</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='profitMargin' defaultValue={myProducts[0]?.profitMargin} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/*product Discount */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Discount</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='productDiscount' defaultValue={myProducts[0]?.profitMargin} placeholder="product Discount" className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/*ProductDescription */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='ProductDescription' defaultValue={myProducts[0]?.ProductDescription} placeholder="ProductDescription" className="input input-bordered w-full" />
                            </label>
                        </div>




                        <input type="submit" value="Update" className="btn btn-block btn-primary mt-[20px]" />


                    </form>

                </div>



            </div>


        </div>
    );
};

export default ProductUpdate;