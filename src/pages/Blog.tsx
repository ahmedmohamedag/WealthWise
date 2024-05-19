import Caption from "../common/Caption"
import { finwise } from "../data"


const Blog = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center">
        {/* TITLE */}
        <div className="py-10 text-center">
          <h2 className="mx-auto text-4xl w-fit py-7">Blog</h2>
          <ul className="flex gap-8 w-fit">
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>


        <div className="p-8 bg-white rounded-3xl">
          <h2 className="py-5 mb-5 text-4xl">Latest</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {/* يوجد تحديث عشان التكرار */}
            {/* BLOG */}
            <div className="grid gap-6 lg:grid-cols-2 ">
              <div className="mx-auto overflow-hidden rounded-3xl w-fit">
                <img src="blog_1.png" alt="" className="duration-200 hover:scale-110" />
              </div>
              <div className="flex flex-col items-start justify-around gap-4">
                <Caption>fintech</Caption>
                <h3 className="text-3xl">The story of how Dave took the long road to become a neobank</h3>
                <span>APR 4, 2023</span>
              </div>
            </div>

            {/* BLOG */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="mx-auto overflow-hidden rounded-3xl w-fit">
                <img src="blog_2.png" alt="" className="duration-200 hover:scale-110" />
              </div>
              <div className="flex flex-col items-start justify-around gap-4">
                <Caption>ADVERTISING</Caption>
                <h3 className="text-3xl">How To Set Short and Long Term Career Goals</h3>
                <span>MAR 28, 2023</span>
              </div>
            </div>


          </div>
        </div>

        {/* finwise */}
        <div className="grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-3">
          {
            finwise.map(e => (
              <div className="px-2">
                <img src={`${e.image}.png`} alt="" />
                <Caption className="py-2">{e.caption}</Caption>
                <h3 className="px-2 text-2xl">{e.body}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
