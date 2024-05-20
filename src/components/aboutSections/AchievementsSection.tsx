import { achievements } from '../../data'

const AchievementsSection = () => {
    return (
        <section className="flex flex-col items-center gap-10 my-10 xl:flex-row">
            <img src="about_2.png" alt=" Our achievements image" className="" />
            <div className="p-10 py-32 text-white h- rounded-3xl bg-blue">
                <h2 className="text-3xl md:text-5xl">Our achievements</h2>
                <p className="py-10 text-xl text-light-blue">We're committed to achieving excellence in everything we do. Over the years, we've worked hard to build a reputation for providing exceptional services and delivering outstanding results for our clients. We're proud of our achievements and milestones, and we want to share them with you.</p>
                <div className="grid gap-2 md:grid-cols-2">
                    {
                        achievements.map((achiev, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <span className="text-4xl">{achiev.number}</span>
                                <span className="w-full text-secondary">{achiev.text}</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default AchievementsSection
