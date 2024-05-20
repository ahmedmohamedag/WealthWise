import Caption from "../../common/Caption"
import { Feature_card } from "../../data"

const FeaturesSection = () => {
    return (
        <div className="text-center">
            <div className="mt-32 mb-12">
                <Caption className="text-xl">FEATURES</Caption>
                <h2 className="pb-10 text-2xl sm:text-5xl">Start your journey to better credit</h2>

                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est
                </p>
            </div>
            {/* Feature_card */}
            <div className="grid gap-16 pt-20 lg:grid-cols-3 lg:gap-8">
                {
                    Feature_card.map((card, index) => (
                        <div className="relative flex flex-col items-center px-5 py-10 bg-white rounded-2xl" key={index}>
                            <h3 className="py-8 text-3xl">{card.title}</h3>
                            <p>{card.body}</p>
                            {/* circal */}
                            <div className="absolute top-0 w-20 h-20 -translate-y-1/2 rounded-full bg-blue"></div>
                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}

export default FeaturesSection
