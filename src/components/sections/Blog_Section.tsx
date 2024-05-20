import { homeBlogData } from "../../data"

const Blog_Section = () => {
    return (
        <section className="p-10 bg-blue rounded-3xl">
            <div className="flex flex-col-reverse gap-8 pb-16 pt-re6 xl:flex-row">
                <div className="flex flex-col gap-5">
                    <span className="text-xl text-secondary">NEWS</span>
                    <h2 className="py-4 text-3xl font-semibold text-white md:text-5xl">Minimum Wage May Lead to higher levels of poverty</h2>
                    <p className="text-light-blue">The U.S. government reached the $31.4 trillion debt limit imposed by Congress on Jan. 19, and since then has been relying on accounting tricks by the Treasury Department.</p>
                </div>
                <img src="homePage/home_blog_1.png" alt="home_blog imag" />
            </div>
            
            <div className="grid items-center grid-cols-1 gap-6 py-5 sm:grid-cols-2 lg:grid-cols-3 my-7 justify-items-center">

                {
                    homeBlogData.map((blog,index)=>(
                        
                        <div key={index} className="text-white">
                        <img src={blog.image} alt={blog.alt} />
                        <caption className="py-3 text-2xl font-semibold capitalize text-secondary">{blog.caption}</caption>
                        <p className="text-white">{blog.body}</p>
                        <h2 className="pt-3 text-xl text-light-blue">{blog.author}</h2>
                    </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Blog_Section
