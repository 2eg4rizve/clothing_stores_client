// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";


const useAllProducts = () => {
    // const { user } = useContext(AuthContext);


    const {data: allProducts = [], isLoading: AllProductsLoading  } = useQuery({
        queryKey: ['AllProducts'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/products");
            return res.data;
        }
    })
    return [allProducts,AllProductsLoading]
};

export default useAllProducts;