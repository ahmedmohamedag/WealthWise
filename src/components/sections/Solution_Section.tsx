import { ArrowRight, Briefcase, DollarSign, LayoutGrid, Zap } from "lucide-react"
import Card from "../../common/Card"
import Caption from "../../common/Caption"
const cardList = [
    {
        icon: <DollarSign className="text-secondary w-10 h-10" />,
        title: "Money Management",
        body: "With experience in all market conditions, we recognize what processes and solutions."
    },
    {
        icon: <LayoutGrid className="text-secondary w-10 h-10" />,
        title: "Financial Planning",
        body: "These plans may include investment strategies, savings plans, etc."
    },
    {
        icon: <Briefcase className="text-secondary w-10 h-10" />,
        title: "Strategic Partner",
        body: "With experience in all market conditions, we recognize what processes and solutions."
    },
    {
        icon: <Zap className="text-secondary w-10 h-10" />,
        title: "Risk Management",
        body: "With experience in all market conditions, we recognize what processes and solutions."
    },

]
const Solution_Section = () => {
    return (
        <section className="bg-blue  gap-10 p-3 sm:p-10 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-10 pb-6">
                <div className="flex flex-col items-start justify-center">

                    <Caption className="py-6">about us</Caption>
                    <h2 className="py-5 sm:pe-0  text-3xl sm:text-4xl  md:text-6xl text-white">Financial Plan for Long-Term Success</h2>
                    <p className="text-slate-200">We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.</p>
                </div>
                <Card>
                    <img src="solution.png" className="h-80" alt="solution Image" />
                </Card>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-10">
                {
                    cardList.map(card => (
                        <Card>
                            {card.icon}
                            <h3 className=" text-3xl py-4">{card.title}</h3>
                            <p>{card.body}</p>
                        </Card>
                    ))
                }

            </div>
            <div className="flex items-center space-x-4 text-white pt-7">
                <ArrowRight className="bg-secondary rounded-full  w-12 h-12 p-2 animate-bounce" />
                <span className="capitalize text-xl">learn more</span>
            </div>
        </section>
    )
}

export default Solution_Section
