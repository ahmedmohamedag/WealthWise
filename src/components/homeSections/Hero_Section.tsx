import { CircleArrowRight } from "lucide-react"
import Button from "../../common/Button"
import { Link } from "react-router-dom"

const Hero_Section = () => {
    return (
        <section className="flex flex-col items-center justify-between space-x-6 font-medium lg:flex-row">
            {/* Header body */}
            <div className="px-3 sm:me-12 sm:pe-12">
                <div className="pb-6">
                    <h2 className="pb-5 text-3xl sm:pe-0 md:pe-20 sm:text-4xl md:text-6xl ">Empower Your Financial Future with FinWise</h2>
                    <p className="">We help businesses stand out in crowded markets. When customers have a positive experience with a brand, they are more likely to remember it.</p>
                </div>
                <Link to="pricing">

                    <Button className="w-full sm:w-fit ">
                        Get Started <CircleArrowRight className="ps-2" />
                    </Button>
                </Link>
            </div>
            {/* Image */}
            <img src="hero.png" alt="hero image" className="" />
        </section>
    )
}

export default Hero_Section
