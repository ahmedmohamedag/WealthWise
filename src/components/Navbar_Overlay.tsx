import {  NavLink } from "react-router-dom"
import { navLinkes } from "../data"

const Navbar_Overlay = () => {
    return (
        <>
            <ul id="Navbar_Overlay" className="fixed top-[100px] bottom-0 left-0 right-0 z-30 flex flex-col items-center justify-center gap-4  md:hidden">
                {
                    navLinkes.map(link => (
                        <li className="" key={link.id}>
                            <NavLink to={link.path} className="text-xl tracking-wide capitalize font-xl hover:text-light-blue ">{link.title}</NavLink>
                        </li>
                    ))
                }
                <li>
                    <NavLink to="/contact" className="text-xl tracking-wide capitalize font-xl hover:text-light-blue ">Contact</NavLink>
                </li>

            </ul>
        </>
    )
}

export default Navbar_Overlay
