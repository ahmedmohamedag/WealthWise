import { personal_Loans } from "../../data"

const Blog_Services_Siction = () => {
    return (
        <div className="flex flex-col bg-white md:p-8 rounded-3xl">
            {/*  */}
            <div className="flex flex-col items-center pb-10 space-x-8 md:flex-row">
                <img src="Personal_Loans_1.png" alt="Personal_Loans_1 image" className="px-4 pt-8" />
                <div className="">
                    <h3 className="py-10 text-4xl md:text-5xl">Personal Loans</h3>
                    <p className="pb-8 text-3xl">Life is full of unexpected expenses, from home repairs to medical bills to car accidents. If you're facing a financial challenge and need help getting back on track, a personal loan can provide the funding you need to cover your expenses.
                    </p>
                </div>
            </div>

            {/*  */}
            <div className="grid gap-8 px-4 py-16 md:grid-cols-3">
                {
                    personal_Loans.map((card, index) => (
                        <div key={index} className="flex flex-col ">
                            <img src={card.image} alt="" />
                            <h3 className="py-4 text-3xl md:text-4xl">{card.title}</h3>
                            <p className="text-xl">{card.body}</p>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

export default Blog_Services_Siction
