import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinkes } from "../data";
import Navbar_Overlay from "./Navbar_Overlay";
const Navbar = () => {
  const [isOpin, setIsOpin] = useState(true)
  const closeNav = () => { setIsOpin(false) }
  const openNav = () => { setIsOpin(true) }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 md:px-10">
      <nav className="container flex items-center justify-between px-10 py-4 mx-auto text-white bg-blue sm:rounded-2xl">
        {/* LOGO */}
        <Logo />
        {/* LINKS */}
        <ul className="items-center justify-center hidden px-10 space-x-4 text-2xl text-center md:flex top-24 bg-blue">
          {
            navLinkes.map(link => (
              <li className="" key={link.id}>
                <NavLink to={link.path} className="text-base font-normal tracking-wide capitalize hover:text-light-blue ">{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
        {/* BUTTON */}
        <NavLink to="/contact">
          <Button className="hidden px-8 py-3 duration-300 bg-white rounded-xl text-blue md:flex hover:bg-secondary hover:text-white">
            Contact
          </Button>
        </NavLink>

        {
          isOpin ?
            <>
              <Menu className="w-10 h-10 cursor-pointer md:hidden hover:text-light-blue" onClick={closeNav} />
            </>
            :
            <>
              <Navbar_Overlay />
              <X className="w-10 h-10 cursor-pointer md:hidden hover:text-light-blue" onClick={openNav} />
            </>
        }
      </nav>
    </header>
  )
}

export default Navbar
