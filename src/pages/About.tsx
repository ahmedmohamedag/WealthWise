
const About = () => {
  return (
    <section>
      {/* About Company */}

      {/* History */}
      {/* Our achievements */}
      {/* Our Management */}
      {/*Brand  */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 my-16  gap-6 items-center  justify-items-center">
        <h2 className="text-5xl font-semibold py-7 md:py-0">Trusted by</h2>
        <img src="google.png" alt="google image" />
        <img src="Pay.png" alt="pay imag" />
        <img src="linkedin.png" alt="linkedin image" />
        <img src="Facebook.png" alt=" Facebook image" className="sm:col-span-2  lg:col-span-4 xl:col-span-1"/>
      </div>
      {/* Gallery */}
      <div className="bg-white rounded-3xl p-10">
        <h2 className="text-6xl py-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  my-7 justify-items-center  items-center ">
          <img src="gallery_1.png" alt="" />
          <img src="gallery_2.png" alt="" />
          <img src="gallery_3.png" alt="" className="sm:col-span-2 lg:col-span-1 " />
        </div>
      </div>
    </section>
  )
}

export default About
