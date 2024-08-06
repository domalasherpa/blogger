import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ProtectedRoute from "../components/ProtectedRoute";
import { useEffect } from "react";

export default function RootLayout(){

    useEffect(()=>{
        console.log("called..");
    }, []);
    return (
        <div className="grid grid-cols-8 grid-rows-12 w-1/2">
            <header className="col-span-8 row-span-1">
                <nav className="flex justify-center gap-2 mb-2 font-bold">
                    <div className="mr-auto">
                        <h1 className="border-b-4 border-purple-600">Blogger</h1>
                    </div>
                    <NavLink to='/' className="w-1/10">Home</NavLink>
                    <NavLink to='/blogs' className="w-1/10">Blogs</NavLink>
                    <NavLink to="/profile" className="w-1/10">Profile</NavLink>
                </nav>
                <Breadcrumbs />
            </header>

            <main className="col-span-8 mt-3">
                <ProtectedRoute><Outlet /></ProtectedRoute>
            </main>
        </div>
    )

}


