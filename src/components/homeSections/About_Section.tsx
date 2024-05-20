import Caption from "../../common/Caption"

const About_Section = () => {
    return (
        <section className="lg:py-[50px] lg:px-[40px]">
            <div className="bg-white rounded-3xl md:rounded-[50px] sm:px-10 md:py-[50px] lg:px-[40px] md:grid  grid-cols-1 lg:grid-cols-5 ">
                {/* image */}
                <img src="about.png" alt=""  className="mx-auto pb-4  lg:w-[500px] lg:h-[500px] sm:col-span-2" />
                {/* Content */}
                <div className="flex flex-col items-start justify-center sm:col-span-3 ps-10">
                    <Caption>about US</Caption>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl">Providing Innovative Services and Solutions</h2>
                    <p className="pt-5">We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.</p>
                </div>
            </div>
        </section>
    )
}

export default About_Section
