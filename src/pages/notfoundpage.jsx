import { useNavigate } from "react-router-dom"
import error from "../data/assets/error.png"


const NotFoundPage = () =>{

    const navigate = useNavigate()

    return(
        <div className="h-full grid grid-cols-12 pt-10">
            <div className="col-[2/span_10] flex flex-col items-center gap-10">
                <div>
                    <h3 className={`font-extrabold dark:text-white text-4xl text-center mb-5`}>
                       Error 404
                    </h3>
                    <p className="text-center capitalize font-bold dark:text-white">
                        we can,t find the page that you are looking for.
                    </p>
                </div>
                <img 
                  alt="404 not found"
                  src={error}
                  loading="lazy"
                  className="h-[300px] min-w-[300px] max-w-[500px] object-fill"
                />
                <button 
                   className="text-white bg-[#1976d2] flex items-center w-fit px-4 py-2 rounded-md font-bold" 
                   onClick={()=>navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}
export default NotFoundPage