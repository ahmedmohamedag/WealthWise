import Caption from '../../common/Caption'
import { LatestBlog } from '../../data'

const LatestBlog_section = () => {
    return (
        <section className='flex flex-col items-center'>
            <div className="py-10 text-center">
                <h2 className="mx-auto text-4xl w-fit py-7">Blog</h2>
                <ul className="flex gap-8 w-fit">
                    <li>Linkedin</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            {/* Latest Blog  */}
            <div className="p-8 bg-white rounded-3xl">
                <h2 className="py-5 mb-5 text-4xl">Latest</h2>
                <div className="grid gap-4 lg:grid-cols-2">
                    {
                        LatestBlog.map((blog, index) => (
                            <div key={index} className="grid gap-6 lg:grid-cols-2">
                                <div className="mx-auto overflow-hidden rounded-3xl w-fit">
                                    <img src={blog.image} alt="" className="duration-200 hover:scale-110" />
                                </div>
                                <div className="flex flex-col items-start justify-around gap-4">
                                    <Caption>{blog.capction}</Caption>
                                    <h3 className="text-3xl">{blog.title}</h3>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default LatestBlog_section
