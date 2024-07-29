import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <h2>Page not found</h2>
            <p>We are sorry, but the page you are looking for could not be found.</p>
            <p>Please check the URL or go to the <Link to="/">Home Page</Link>.</p>
        </div>
    );
}
