

const SalesHistory = () => {
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[40px] pt-[20px]">Sales History</p>

            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Selling Date</th>
                            <th>Profit</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // MyProducts.map((item, index) => <tr key={item._id}>
                            //     <th>
                            //         {index + 1}
                            //     </th>
                            //     <td>
                            //         {item._id}
                            //     </td>
                            //     <td>
                            //         {item.productName}
                            //     </td>
                            //     <td>
                            //         <div className="flex items-center gap-3">
                            //             <div className="avatar">
                            //                 <div className="mask mask-squircle w-12 h-12">
                            //                     <img src={item.productImg} alt="Avatar Tailwind CSS Component" />
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </td>

                            //     <td>{item.productQuantity}</td>

                            //     <td>{item.productDiscount}%</td>

                            //     <td>${item.SellingPrice}</td>


                            //     <th>
                            //         <button className="btn btn-ghost btn-sm">
                            //             Check-out
                            //         </button>
                            //     </th>
                            // </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SalesHistory;