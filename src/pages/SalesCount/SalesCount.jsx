

const SalesCount = () => {
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[40px] pt-[20px]">Sales Count</p>

            <div className="card w-96 bg-base-100 shadow-xl mt-[50px]">
                <div className="card-body">
                    <h2 className="card-title">Total Sale : 1500 $</h2>

                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl mt-[50px]">
                <div className="card-body">
                    <h2 className="card-title">Total Invest : 3200 $</h2>

                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl mt-[50px]">
                <div className="card-body">
                    <h2 className="card-title">Total Profit: 1700 $</h2>

                </div>
            </div>


        </div>
    );
};

export default SalesCount;