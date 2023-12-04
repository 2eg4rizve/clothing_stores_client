import useAllProducts from "../../hooks/useAllProducts";
import AllProductDetails from "./AllProductDetails";


const AllProduct = () => {

    const [allProducts, AllProductsLoading, AllProductsRefetch] = useAllProducts();

    if (AllProductsLoading) {
        return <p>Loading...............</p>
    }


    return (
        <div>

            <div>
                <p>Total Product :{allProducts.length}</p>

                <div className="grid grid-cols-3 gap-5">
                    {
                        allProducts.map(item => <AllProductDetails key={item._id} item={item} AllProductsRefetch={AllProductsRefetch}></AllProductDetails>)
                    }

                </div>
            </div>

        </div>
    );
};

export default AllProduct;