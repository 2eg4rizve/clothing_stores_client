import axios from "axios";
import { useQuery } from "react-query";


const UserSection = () => {

    const { data: users = [] ,isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://clothing-stores-server.vercel.app/users');
            return res.data;
        }
    })

    if(isLoading){
        <p>Loading..............</p>
    }

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
                            <th>User Id </th>

                            <th>User Name</th>
                            <th>User Email </th>
                            
                            <th>Role</th>
                            <th>Promotion</th>
                           

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                
                                <td>
                                    {item._id}
                                </td>

                                <td>
                                    {item.name}
                                </td>

                                <td>
                                    {item.email}
                                </td>

                                <td>
                                    {item.role}
                                </td>

                              


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

export default UserSection;