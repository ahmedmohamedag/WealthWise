import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const RoutLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
            <Footer/>
        </>
    )
}

export default RoutLayout
