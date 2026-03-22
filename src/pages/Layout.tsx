import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen px-4 py-4 md:px-12 md:py-8 lg:px-16 lg:py-10 xl:px-20 gap-6 w-full max-w-[1450px] mx-auto items-start pb-24 lg:pb-10">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full bg-[#1E1E1F] border border-white/10 rounded-3xl relative overflow-hidden min-h-[80vh]">
                <Navbar />
                <div className="p-6 md:p-10 lg:p-12 pb-28 lg:pb-12 text-white">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout