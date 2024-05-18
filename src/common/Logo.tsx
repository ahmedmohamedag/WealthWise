import { Link } from "react-router-dom"

const Logo = () => {
    return (
            <Link to="/" className="flex items-center">
                <span className="relative">
                    <img src="vector_top.svg" alt="vector-top" className=" absolute" />
                    <img src="vector.svg" className="w-7 h-7" alt="vector" />
                </span>
                <span className="font-semibold text-xl md:text-[22.8px] leading-7">WealthWise</span>
            </Link>
    )
}

export default Logo
