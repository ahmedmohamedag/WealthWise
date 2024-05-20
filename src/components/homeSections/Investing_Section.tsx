import Caption from "../../common/Caption"

const Investing_Section = () => {
    return (
        <section className="flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center py-6 text-center">
                <Caption className="text-xl">OUR INVESTING</Caption>
                <h1 className="sm:leading-[70px]  md:leading-[90px] tracking-tight text-2xl sm:text-5xl md:text-6xl">Empowering Your Business With Financial Capabilities</h1>
            </div>
            <div className="flex items-center justify-center p-10">
                <img src="Investing.png" alt="" className="sm:w-[90%]"/>
            </div>
        </section>
    )
}

export default Investing_Section
