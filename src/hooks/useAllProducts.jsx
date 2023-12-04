// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";


const useAllProducts = () => {
    // const { user } = useContext(AuthContext);


    const {data: allProducts = [],refetch: AllProductsRefetch,isLoading: AllProductsLoading } = useQuery({
        queryKey: ['AllProducts'],
        queryFn: async () => {
            const res = await axios.get("https://clothing-stores-server.vercel.app/products");
            return res.data;
        }
    })
    return [allProducts,AllProductsLoading,AllProductsRefetch]
};

export default useAllProducts;