import { CircleArrowRight } from "lucide-react"
import Button from "../../common/Button"

const Hero = () => {
    /**
 * 
    line-height: 4.75rem;
    letter-spacing: -2%;
    font-weight: 400;
 */
    return (
        <section className="flex justify-between lg:flex-row flex-col space-x-6 font-medium items-center">
            {/* Header body */}
            <div className="sm:me-12 sm:pe-12 px-3">
                <div className="pb-6">
                    <h2 className="pb-5 sm:pe-0 md:pe-20 text-3xl sm:text-4xl  md:text-6xl ">Empower Your Financial Future with FinWise</h2>
                    <p className="">We help businesses stand out in crowded markets. When customers have a positive experience with a brand, they are more likely to remember it.</p>
                </div>
                <Button className="w-full sm:w-fit ">
                    Get Started <CircleArrowRight className="ps-2"/>
                </Button>
            </div>
            {/* Image */}
            <img src="hero.png" alt="hero image" className="" />
        </section>
    )
}

export default Hero
