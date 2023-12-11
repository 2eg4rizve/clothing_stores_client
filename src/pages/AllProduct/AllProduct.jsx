
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
                <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">All Product</p>

                <p>Total Product :{allProducts.length}</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        allProducts.map(item => <AllProductDetails key={item._id} item={item} AllProductsRefetch={AllProductsRefetch}></AllProductDetails>)
                    }

                </div>
            </div>

        </div>
    );
};

export default AllProduct;