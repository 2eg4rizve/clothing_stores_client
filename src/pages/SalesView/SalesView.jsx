

const SalesView = () => {
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">Sales View</p>

            <div className="card w-96 bg-base-100 shadow-xl border-2 border-sky-500 mt-[50px]">
                <div className="card-body">
                    <h2 className="card-title">Total Income</h2>
                    <p className="text-2xl font-bold ">3429 $</p>
                    
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl border-2 border-sky-500 mt-[50px]">
                <div className="card-body">
                    <h2 className="card-title">Total Product</h2>
                    <p className="text-2xl font-bold ">32</p>
                    
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl border-2 border-sky-500 mt-[50px]">
                <div className="card-body">
                    <h2 className="card-title">Total Sales</h2>
                    <p className="text-2xl font-bold ">12</p>
                    
                </div>
            </div>

            

        </div>
    );
};

export default SalesView;