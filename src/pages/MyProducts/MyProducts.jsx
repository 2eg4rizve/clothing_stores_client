import { useContext } from "react";
import useAllProducts from "../../hooks/useAllProducts";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyProductDetails from "./MyProductDetails";


const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const [allProducts, AllProductsLoading] = useAllProducts();

    if (AllProductsLoading) {
        return <p>Loading...............</p>
    }

    // console.log(allProducts);

    const myProducts = allProducts.filter(product => product.shopOwnerEmail == user.email)

    // console.log("MyProducts : ", myProducts);

    return (
        <div>
            <p>Total Product :{myProducts.length}</p>
            
            <div className="grid grid-cols-3 gap-5">
                {
                    myProducts.map(item => <MyProductDetails key={item._id} item={item}></MyProductDetails>)
                }

            </div>
        </div>
    );
};

export default MyProducts;