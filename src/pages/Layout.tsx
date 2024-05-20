import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../common/ScrollToTop"

const RoutLayout = () => {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
            <ScrollToTop/>
            <Footer />
        </div>
    )
}

export default RoutLayout
