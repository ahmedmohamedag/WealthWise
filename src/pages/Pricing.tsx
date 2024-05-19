
import { Plus } from "lucide-react"
import Plan from "../common/Plan"
import { Plans } from "../data"
const QS = [
  " How do you ensure the security of my personal and financial information?",
  "How do you help with finance management?",
  "How can I apply for a loan with your company?",
  "What services does your company offer?",
  "How do I contact customer support?",
]

const Pricing = () => {
  return (
    <section>
      <div className="">
        <div className="flex flex-col items-center py-8 mb-6 text-center">
          <h3 className="py-4 text-3xl sm:text-4xl md:text-5xl">We Have The Best Pricing Package</h3>
          <p className="px-1 text-xl sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut .</p>
        </div>
        <div className="grid items-center gap-4 px-2 lg:gap-10 lg:px-20 sm:grid-cols-3 ">
          <Plan caption="STARTER PLAN" check_List={Plans.plan_one} price="49" className="bg-white" ptn_style="bg-gray hover:bg-secondary " />
          <Plan caption="ENTERPRISE PLAN" check_List={Plans.plan_tow} price="99" className="pb-20 text-white bg-blue rounded-3xl"
          />
          <Plan caption="PRO PLAN" check_List={Plans.plan_three} price="139" className="bg-white" ptn_style="bg-gray hover:bg-secondary " />
        </div>
      </div>
      {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}









      <div className="flex flex-col items-center px-2 py-10 mt-10">
        <div className="flex flex-col items-center py-8 mb-6 text-center">
          <h3 className="py-4 text-3xl sm:text-4xl md:text-5xl">FAQs</h3>
          <p className="px-1 text-xl sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut .</p>
        </div>
        <ul className="px-4 py-8 bg-white sm:px-10 lg:w-2/3 rounded-3xl">
          {
            QS.map((qs,index)=>(
            <li key={index} className="flex gap-3 py-2 duration-300 border-b sm:gap-5 sm:items-center sm:py-5 border-b-neutral-300 sm:pe-20 hover:bg-slate-100 hover:cursor-pointer" ><Plus /> {qs}</li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default Pricing
