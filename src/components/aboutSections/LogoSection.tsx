
const LogoSection = () => {
    return (
        <section className="grid items-center grid-cols-1 gap-6 my-16 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center lg:py-16">
            <h2 className="text-5xl font-semibold py-7 md:py-0">Trusted by</h2>
            <img src="google.png" alt="google image" />
            <img src="Pay.png" alt="pay imag" />
            <img src="linkedin.png" alt="linkedin image" />
            <img src="Facebook.png" alt=" Facebook image" className="sm:col-span-2 lg:col-span-4 xl:col-span-1" />
        </section>
    )
}

export default LogoSection
