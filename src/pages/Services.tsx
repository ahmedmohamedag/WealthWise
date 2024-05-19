import Caption from "../common/Caption"

const Feature_card = [
  {
    title: "Financial Planning",
    body: "Secure Your Financial Future with Expert Financial Planning. Start Today!",
  },
  {
    title: "Money Management",
    body: "With experience in all market conditions, we recognize what processes and solutions.",
  },
  {
    title: "Strategic Partner",
    body: "With experience in all market conditions, we recognize what processes and solutions.",
  },
]
const FinancialPlan = [
  {
    title: "First Funding",
    body: "Whether you're planning for retirement, saving for a child's education, or buying a home, we have the tools and resources you need to succeed."
  },
  {
    title: "Business Operational",
    body: "Our team of experienced financial planners will work with you to understand your unique needs and develop a customized plan that fits your goals."
  },
  {
    title: "Business Expansion",
    body: "We'll help you navigate complex financial issues, such as investment strategies, tax planning, and risk management, and provide ongoing support."
  },
]

const Services = () => {
  return (
    <section className="px-2 py-10">
      {/* 1 */}
      <div className="grid items-center gap-8 md:grid-cols-2 ps-2">
        <img src="Payment_With_Card_3.png" className="mx-auto lg:w-2/4" />
        <div className="">
          <h2 className="py-3 text-3xl sm:text-4xl">Award winning <br />
            business management</h2>
          <p className="pt-5">We understand that running a business is challenging. That's why we offer business management services designed to help you achieve your goals and grow your business. Whether you're just starting out or looking to take your business to the next level, we have the tools and expertise you need to succeed.</p>
        </div>
      </div>
      {/* 2 */}
      <div className="text-center">
        <div className="mt-32 mb-12">
          <Caption className="text-xl">FEATURES</Caption>
          <h2 className="pb-10 text-2xl sm:text-5xl">Start your journey to better credit</h2>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est
          </p>
        </div>
        {/* Feature_card */}
        <div className="grid gap-16 pt-20 lg:grid-cols-3 lg:gap-8">
          {
            Feature_card.map((card, index) => (
              <div className="relative flex flex-col items-center px-5 py-10 bg-white rounded-2xl" key={index}>
                <h3 className="py-8 text-3xl">{card.title}</h3>
                <p>{card.body}</p>
                {/* circal */}
                <div className="absolute top-0 w-20 h-20 -translate-y-1/2 rounded-full bg-blue"></div>
              </div>
            )
            )
          }
        </div>

      </div>
      {/* 3 */}
{/* grid items-center gap-12 py-20 sm:py-36 md:grid-cols-2 ps-2 */}
      <div className="flex flex-col gap-8 py-20 space-x-5 sm:py-36 ps-2 lg:flex-row">
        <div className="flex flex-col items-center flex-1">
          <div className="">
            <h2 className="text-4xl sm:text-6xl pb-7">Financial Planning</h2>
            <p className="pt-3 text-2xl">We understand that financial planning can be overwhelming and confusing. That's why we offer expert guidance and support to help you make informed decisions and achieve your goals.</p>
          </div>

          {
            FinancialPlan.map((plan, index) => (
              <div className="" key={index}>
                <h3 className="py-5 text-3xl">{plan.title}</h3>
                <p className="text-2xl">{plan.body}</p>
              </div>
            ))
          }

        </div>
        <img src="finwise_2_1.png" alt="" className="flex-1 ms-0"/>
      </div>
      
      {/* 4 */}
      <div className="flex flex-col gap-8 py-20 space-x-5 ps-2 lg:flex-row-reverse">
        <div className="flex flex-col items-center flex-1">
          <div className="">
            <h2 className="text-4xl sm:text-6xl pb-7">Financial Planning</h2>
            <p className="pt-3 text-2xl">We understand that financial planning can be overwhelming and confusing. That's why we offer expert guidance and support to help you make informed decisions and achieve your goals.</p>
          </div>

          {
            FinancialPlan.map((plan, index) => (
              <div className="" key={index}>
                <h3 className="py-5 text-3xl">{plan.title}</h3>
                <p className="text-2xl">{plan.body}</p>
              </div>
            ))
          }

        </div>
        <img src="finwise2_2.png" alt="" className="flex-1 ms-0"/>
      </div>
    </section>
  )
}

export default Services
