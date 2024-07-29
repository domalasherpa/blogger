import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs(){
    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb=>{
        currentLink += `/${crumb}`

        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink} className="inline-flex items-center">
                    <span>{crumb}</span>
                    <span className="mx-2">&#62;</span>
                </Link>
            </div>
        )
    });

    return (
        <div className="breadcrumbs flex my-5 text-xs text-slate-200 font-semibold">
            {crumbs}
        </div>

    )
}