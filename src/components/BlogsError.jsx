import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BlogsError(){
    const error = useRouteError();

    return (
        <div className="blogs-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to homepage</Link>
        </div>
    )
}