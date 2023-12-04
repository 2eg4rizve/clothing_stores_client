import useAllShop from "../../hooks/useAllshop";


const ManageShop = () => {

    const [allShop, isLoading] = useAllShop();

    if (isLoading) {
        return <p>Loading...............</p>
    }

    return (
        <div>
            <p className="text-5xl font-bold text-center my-[30px] pt-[20px]"> Manage Shop</p>

            <p className="font-bold mb-[30px]">Total Shop : {allShop.length}</p>

            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Shop Name</th>
                            <th>Shop ID</th>
                            <th>Shop Logo</th>
                            <th>Product Limit</th>
                            <th>Shop Description</th>
                            <th>Send Notice</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allShop.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.shopName}
                                </td>
                                <td>
                                    {item._id}
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.shopLogo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>{item.shopInfo}</td>

                                <td>{item.shopInfo}</td>




                                <th>
                                    <button className="btn btn-ghost btn-sm">
                                        Send Notice
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default ManageShop;