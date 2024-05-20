import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinkes = [
  {
    title: "services",
    path: "services",
    id: "0_SER",
  },
  {
    title: "pricing",
    path: "pricing",
    id: "0_PRI",
  },
  {
    title: "about",
    path: "about",
    id: "0_ABO",
  },
  {
    title: "blog",
    path: "blog",
    id: "0_BLO",
  },
]


const Navbar = () => {
  const [isOpin, setIsOpin] = useState(true)

  const closeNav = () => { setIsOpin(false) }
  const openNav = () => { setIsOpin(true) }


  return (
    <header className="py-6 md:px-10">
      <nav className="container flex items-center justify-between px-10 py-4 mx-auto text-white bg-blue sm:rounded-2xl">
        {/* LOGO */}
        <Logo />
        {/* LINKS */}
        <ul className={`${isOpin ? "hidden" : " fixed sm:static bottom-0 top-24 px-10 text-2xl right-0   "} sm:flex flex-col sm:flex-row items-center justify-center bg-blue text-center flex space-x-4`}>
          {
            navLinkes.map(link => (
              <li className="" key={link.id}>
                <Link to={link.path} className="text-base font-normal tracking-wide capitalize hover:text-light-blue ">{link.title}</Link>
              </li>
            ))
          }
        </ul>
        {/* BUTTON */}
        <Link to="/contact">
          <Button  className="hidden px-8 py-3 duration-300 bg-white rounded-xl text-blue sm:flex hover:bg-secondary hover:text-white">
            Contact
          </Button>
        </Link>

        {
          isOpin ?
            <Menu className="w-10 h-10 cursor-pointer sm:hidden hover:text-light-blue" onClick={closeNav} />
            :
            <X className="w-10 h-10 cursor-pointer sm:hidden hover:text-light-blue" onClick={openNav} />
        }
      </nav>
    </header>
  )
}

export default Navbar
