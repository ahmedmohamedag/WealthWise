import Caption from "../../common/Caption"

const About_Section = () => {
    return (
        <section className="md:py-[50px] md:px-[40px]">
            <div className="bg-white rounded-3xl md:rounded-[50px] md:py-[50px] md:px-[40px] md:grid grid-cols-5 ">
                {/* image */}
                <img src="about.png" alt="" className="object-contain w-[500px] h-[500px] col-span-2" />
                {/* Content */}
                <div className=" col-span-3 flex flex-col items-start justify-center ps-10">
                    <Caption>about US</Caption>
                    <h2 className="">Providing Innovative Services and Solutions</h2>
                    <p className="pt-5">We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.</p>
                </div>
            </div>
        </section>
    )
}

export default About_Section
