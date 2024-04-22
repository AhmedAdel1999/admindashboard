const LandingPage = () =>{
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[50px] h-[180px] text-center text-sm">
                <div className="inline-block bg-[#9c27b0] h-full w-[6px] animate-loader"></div>
                <div className="inline-block bg-[#9c27b0] h-full w-[6px] animate-[loader_1.2s_infinite_ease-out_-1.1s]"></div>
                <div className="inline-block bg-[#9c27b0] h-full w-[6px] animate-[loader_1.2s_infinite_ease-out_-1.0s]"></div>
                <div className="inline-block bg-[#9c27b0] h-full w-[6px] animate-[loader_1.2s_infinite_ease-out_-0.9s]"></div>
                <div className="inline-block bg-[#9c27b0] h-full w-[6px] animate-[loader_1.2s_infinite_ease-out_-0.8s]"></div>
            </div>
        </div>
    )
}
export default LandingPage;