/* eslint-disable react/prop-types */


const MyProductDetails = ({ item }) => {

    const { productName, productImg, productQuantity } = item || " ";
    // console.log(productImg)
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                    </h2>
                    <p>product Quantity : {productQuantity}</p>
                    <p>Sale Count : 0 </p>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Update</div>
                        <div className="badge badge-outline">Delete</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProductDetails;