/* eslint-disable no-unused-vars */


import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";


const useAllShop = () => {
    const { user } = useContext(AuthContext);


    const { isLoading, data: allShop = [] } = useQuery({
        queryKey: ['allShop'],
        queryFn: async () => {
            const res = await axios.get("https://clothing-stores-server.vercel.app/shops");
            return res.data;
        }
    })
    return [allShop,isLoading]




};

export default useAllShop;