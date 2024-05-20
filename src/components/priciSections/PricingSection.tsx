import Plan from '../../common/Plan'
import { Plans } from '../../data'

const PricingSection = () => {
    return (
        <section>
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
        </section>
    )
}

export default PricingSection
