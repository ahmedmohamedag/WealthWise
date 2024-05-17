import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";

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
  return (
    <header className="py-6 px-10">
      <nav className="container mx-auto flex items-center justify-between bg-blue py-4 px-10 text-white rounded-2xl">
        {/* LOGO */}
        <Logo />
        {/* LINKS */}
        <ul className="md:flex items-center space-x-4 hidden">
          {
            navLinkes.map(link => (
              <li className="" key={link.id}>
                <Link to={link.path} className="capitalize  font-normal text-base tracking-wide	">{link.title}</Link>
              </li>
            ))
          }
        </ul>
        {/* BUTTON */}
        <Button className="rounded-xl py-3 px-8 bg-white text-blue">
          Contact
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
