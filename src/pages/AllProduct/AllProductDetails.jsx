

const AllProductDetails = ({ item, AllProductsRefetch }) => {

    const { _id, productName, productImg,productLocation,shopName,SellingPrice } = item || " ";
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {productName}</h2>
                    <h2 className="card-title">Location : {productLocation}</h2>
                    <h2 className="card-title">Shop Name : {shopName}</h2>
                    <h2 className="card-title">Price : {SellingPrice}</h2>
                   
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProductDetails;