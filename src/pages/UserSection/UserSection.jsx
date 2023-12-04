

const UserSection = () => {
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[40px] pt-[20px]">ALL USER</p>

            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User Name</th>
                            <th>User Email </th>
                            <th>User Shop Name </th>
                            <th>Role</th>
                            <th>Promotion</th>
                           

                        </tr>
                    </thead>
                    <tbody>
                        {
                            // allShop.map((item, index) => <tr key={item._id}>
                            //     <th>
                            //         {index + 1}
                            //     </th>
                            //     <td>
                            //         {item.shopName}
                            //     </td>
                            //     <td>
                            //         {item._id}
                            //     </td>

                            //     <td>
                            //         <div className="flex items-center gap-3">
                            //             <div className="avatar">
                            //                 <div className="mask mask-squircle w-12 h-12">
                            //                     <img src={item.shopLogo} alt="Avatar Tailwind CSS Component" />
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </td>

                            //     <td>{item.shopInfo}</td>

                            //     <td>{item.shopInfo}</td>




                            //     <th>
                            //         <button className="btn btn-ghost btn-sm">
                            //             Send Notice
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

export default UserSection;