import { Plus } from "lucide-react"
import { FAQS } from "../../data"

const FAQsSection = () => {
    return (
        <section className="flex flex-col items-center px-2 py-10 mt-10">
            <div className="flex flex-col items-center py-8 mb-6 text-center">
                <h3 className="py-4 text-3xl sm:text-4xl md:text-5xl">FAQs</h3>
                <p className="px-1 text-xl sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut .</p>
            </div>
            <ul className="px-4 py-8 bg-white sm:px-10 lg:w-2/3 rounded-3xl">
                {
                    FAQS.map((qs, index) => (
                        <li key={index} className="flex gap-3 py-2 duration-300 border-b sm:gap-5 sm:items-center sm:py-5 border-b-neutral-300 sm:pe-20 hover:bg-slate-100 hover:cursor-pointer" ><Plus /> {qs}</li>
                    ))
                }
            </ul>
        </section>

    )
}

export default FAQsSection
