
const AboutCompany = () => {
    return (
        <section className="flex flex-col items-center p-8 my-10 xl:flex-row">
            <img src="about_1.png" alt="About Company image" />
            <div className="flex flex-col gap-5 ps-8">
                <h2 className="pt-4 text-3xl md:text-5xl">About Company</h2>
                <p>We're constantly pushing the boundaries of what's possible and seeking new ways to improve our services and help our clients achieve their goals.</p>
                <h3 className="text-3xl">Vision</h3>
                <p >Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals and live the life they want.</p>
                <h3 className="text-3xl">Mission</h3>
                <p >We're on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they need to manage their finances effectively and make smart financial decisions.</p>
            </div>
        </section>
    )
}

export default AboutCompany

