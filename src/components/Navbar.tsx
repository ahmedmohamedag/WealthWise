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
      <nav className="container mx-auto flex items-center justify-between bg-blue py-4 px-10 text-white sm:rounded-2xl">
        {/* LOGO */}
        <Logo />
        {/* LINKS */}
        <ul className={`${isOpin ? "hidden" :" fixed sm:static bottom-0 top-24 px-10 text-2xl right-0   "} sm:flex flex-col sm:flex-row items-center justify-center bg-blue text-center flex space-x-4`}>
          {
            navLinkes.map(link => (
              <li className="" key={link.id}>
                <Link to={link.path} className="capitalize hover:text-light-blue  font-normal text-base tracking-wide	">{link.title}</Link>
              </li>
            ))
          }
        </ul>
        {/* BUTTON */}
        <Button className="rounded-xl py-3 px-8 bg-white text-blue hidden sm:flex">
          Contact
        </Button>

        {
          isOpin ?
          <Menu className="sm:hidden w-10 h-10 hover:text-light-blue cursor-pointer" onClick={closeNav }  />
          :
          <X className="sm:hidden w-10 h-10 hover:text-light-blue cursor-pointer" onClick={openNav}/>
        }
      </nav>
    </header>
  )
}

export default Navbar
