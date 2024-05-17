import { CircleArrowRight } from "lucide-react"
import Button from "../../common/Button"

const Hero = () => {
    return (
        <section className="flex justify-between space-x-6 items-center">
            {/* Header body */}
            <div className="me-12 pe-12">
                <div className="pb-6">
                    <h2 className="pb-5 pe-20">Empower Your Financial Future with FinWise</h2>
                    <p className="">We help businesses stand out in crowded markets. When customers have a positive experience with a brand, they are more likely to remember it.</p>
                </div>
                <Button>
                    Get Started <CircleArrowRight className="ps-2"/>
                </Button>
            </div>
            {/* Image */}
            <img src="hero.png" alt="hero image" className="" />
        </section>
    )
}

export default Hero
