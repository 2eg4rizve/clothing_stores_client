/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAllShop from "../../hooks/useAllshop";

// rizve@gmail.com
// 123456A!

const CreateShop = () => {

    const { user } = useContext(AuthContext);

    const [allShop, isLoading] = useAllShop();

    if (isLoading) {
        return <p>Loading...............</p>
    }

    const findUser = allShop.find(item => item.shopOwnerEmail === user?.email)


    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const shopName = form.shopName.value || "";
        const shopLogo = form.shopLogo.value || "";

        const shopInfo = form.shopInfo.value || "";
        const shopLocation = form.shopLocation.value || "";

        const shopOwnerEmail = form?.shopOwnerEmail?.value || "";
        const shopOwnerName = form?.shopOwnerName?.value || "";


        const newShop = { shopName, shopLogo, shopInfo, shopLocation, shopOwnerEmail, shopOwnerName }

        console.log(newShop);



        fetch('https://clothing-stores-server.vercel.app/shops', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newShop)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Shop add successfully',

                    })
                }
            })
    }
    if (findUser) {
        return (
            <div>
                <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">Create Shop</p>
                <p className=""> All Ready You Have A Shop</p>
            </div>
        )
    }
    return (
        <div>
            <div>
                <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">Create Shop</p>

                <div className="bg-[#CAEDFF] p-10 text-black">


                    <form onSubmit={handleAdd}>

                        {/*Shop Name */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Shop Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='shopName' placeholder="Shop Name" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/* Shop logo */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Shop logo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='shopLogo' placeholder="Shop logo" className="input input-bordered w-full" required />
                            </label>
                        </div>


                        {/* Shop Info */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Shop Info </span>
                            </label>
                            <label className="input-group text-are">
                                <input type="text" name='shopInfo' placeholder="Shop Info " className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/* Shop location */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Shop location </span>
                            </label>
                            <label className="input-group text-are">
                                <input type="text" name='shopLocation' placeholder="Shop location " className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/*Shop Owner Email  */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Shop Owner Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='shopOwnerEmail' value={user?.email} placeholder="Shop Owner Email" className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/*Shop Owner Name  */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Shop Owner Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='shopOwnerName' value={user?.displayName} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>



                        <input type="submit" value="Create Shop" className="btn btn-block btn-primary mt-[20px]" />


                    </form>

                </div>


            </div>
        </div>
    );
};

export default CreateShop;