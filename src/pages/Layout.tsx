import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row h-screen px-[13px] py-[13px] md:px-[90px] md:py-[26px] lg:px-[150px] lg:py-[45px]">
            <Sidebar />
            <div className="flex flex-col">
                <Navbar />

                <Outlet />
            </div>
        </div>
    )
}

export default Layout