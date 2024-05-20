import { TrendingUp } from "lucide-react"

const historyData=[
  {
    year:"2005",
    body:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date:"07 June 2012",
  },
  {
    year:"2010",
    body:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date:"07 June 2012",
  },
  {
    year:"2013",
    body:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date:"07 June 2012",
  },
  {
    year:"2020-Now",
    body:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date:"07 June 2012",
  },
]
const About = () => {
  return (

    <section>
      {/* About Company */}
      <div className="flex flex-col items-center p-8 my-10 xl:flex-row">

        <img src="about_1.png" alt="About Company image" />
        <div className="flex flex-col gap-5 ps-8">
          <h2 className="text-3xl md:text-5xl">About Company</h2>
          <p>We're constantly pushing the boundaries of what's possible and seeking new ways to improve our services and help our clients achieve their goals.</p>
          <h3 className="text-3xl">Vision</h3>
          <p >Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals and live the life they want.</p>
          <h3 className="text-3xl">Mission</h3>
          <p >We're on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they need to manage their finances effectively and make smart financial decisions.</p>
        </div>
      </div>
      {/* History */}
      <div className="py-10 ">
        <h2 className="text-4xl md:text-6xl">History</h2>
        <div className="grid items-center grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {
            historyData.map((item,index)=>(
              <div className="px-0 py-10 md:px-4 justify-self-center" key={index}>
                <TrendingUp size={50} color="#F4B100" />
                <h2 className="py-6 text-3xl">{item.year}</h2>
                <p className="py-4">{item.body}</p>
                <span className="text-zinc-400 justify-self-end">{item.date}</span>
                {/* Under Line */}
                <div className="relative w-full h-1 mt-8 bg-gray">
                  <span className="absolute left-0 w-4 h-4 -translate-y-1/2 rounded-full bg-secondary"></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
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
