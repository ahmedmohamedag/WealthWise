
const About = () => {
  return (

    <section>
      {/* About Company */}
      <div className="flex flex-col items-center gap-16 p-8 my-10 xl:flex-row">

        <img src="about_1.png" alt="About Company image" />
        <div className="flex flex-col gap-5 ">
          <h2 className="text-3xl md:text-5xl">About Company</h2>
          <p>We're constantly pushing the boundaries of what's possible and seeking new ways to improve our services and help our clients achieve their goals.</p>
          <h3 className="text-4xl">Vision</h3>
          <p>Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals and live the life they want.</p>
          <h3 className="text-3xl">Mission</h3>
          <p>We're on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they need to manage their finances effectively and make smart financial decisions.</p>
        </div>
      </div>

      {/* History */}
      {/* Our achievements */}
      {/* Our Management */}
      {/*Brand  */}
      <div className="grid items-center grid-cols-1 gap-6 my-16 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        <h2 className="text-5xl font-semibold py-7 md:py-0">Trusted by</h2>
        <img src="google.png" alt="google image" />
        <img src="Pay.png" alt="pay imag" />
        <img src="linkedin.png" alt="linkedin image" />
        <img src="Facebook.png" alt=" Facebook image" className="sm:col-span-2 lg:col-span-4 xl:col-span-1" />
      </div>
      {/* Gallery */}
      <div className="p-10 bg-white rounded-3xl">
        <h2 className="py-6 text-6xl">Gallery</h2>
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-7 justify-items-center ">
          <img src="gallery_1.png" alt="" />
          <img src="gallery_2.png" alt="" />
          <img src="gallery_3.png" alt="" className="sm:col-span-2 lg:col-span-1 " />
        </div>
      </div>
    </section>
  )
}

export default About
