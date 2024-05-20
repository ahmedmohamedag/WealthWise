import { BlogGridData } from '../../data'
import Caption from '../../common/Caption'

const BlogGrid_section = () => {
    return (
        <section className="grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-3">
            {
                BlogGridData.map((e, i) => (
                    <div key={i} className="px-2">
                        <img src={`${e.image}.png`} alt="" />
                        <Caption className="py-2">{e.caption}</Caption>
                        <h3 className="px-2 text-2xl">{e.body}</h3>
                    </div>
                ))
            }
        </section>
    )
}

export default BlogGrid_section
