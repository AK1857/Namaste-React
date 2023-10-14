import { useRouteError } from "react-router-dom";



const Error=()=>{
    const error=useRouteError();
    console.log("error",error)
    return(<>
            <h2>Opps Somthihg went wring</h2>

            <p>{error.error.message}</p>
    </>
    )

}

export default Error;