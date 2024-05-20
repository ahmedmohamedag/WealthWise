import { FinancialPlan } from "../../data"
interface IProps{
    dir:"lg:flex-row"|"lg:flex-row-reverse"
}
const Finanial_Plan_Section = ({dir}:IProps) => {
    return (
        <section className={`flex flex-col gap-8 py-14   ps-2 ${dir}`}>
            <div className="flex flex-col items-center flex-1">
                <div >
                    <h2 className="pb-6 text-4xl sm:text-6xl">Financial Planning</h2>
                    <p className="pt-3 text-xl">We understand that financial planning can be overwhelming and confusing. That's why we offer expert guidance and support to help you make informed decisions and achieve your goals.</p>
                </div>

                {
                    FinancialPlan.map((plan, index) => (
                        <div  key={index}>
                            <h3 className="py-3 text-3xl">{plan.title}</h3>
                            <p className="text-xl">{plan.body}</p>
                        </div>
                    ))
                }

            </div>
            <img src="finwise_2_1.png" alt="finwise image" className="flex-1" />
        </section>
    )
}

export default Finanial_Plan_Section
