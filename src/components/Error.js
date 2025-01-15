import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>OOPs !!!</h1>
            <h2>The page does not Exists</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;