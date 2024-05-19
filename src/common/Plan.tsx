import { CircleCheckBig } from "lucide-react"
import Button from "./Button"
import Caption from "./Caption"
import { ReactNode } from "react"
interface I_Propd {
    className?: ReactNode,
    caption: string,
    price: string,
    check_List: string[],
    ptn_style?: string,

}
/**
 * Component for displaying a plan with caption, price, checklist, and a button.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.caption - The caption for the plan.
 * @param {number} props.price - The price of the plan.
 * @param {string[]} props.check_List - The list of features or checks for the plan.
 * @param {string} props.className - Additional class names for styling the container.
 * @param {string} props.ptn_style - Additional class names for styling the button.
 * 
 * @returns {JSX.Element} The JSX element for the plan component.
 */
const Plan = ({ caption, price, check_List, className, ptn_style }: I_Propd) => {
    return (
        <div className={`flex flex-col px-5 py-8 rounded-3xl h-fit ${className}`} >
            <Caption>{caption}</Caption>
            <h2><span className="text-4xl">${price}</span> /month</h2>
            <ul className="py-4">
                {
                    check_List.map((checked, index) => (
                        <li key={index} className="flex items-center py-1 space-x-4">
                            <CircleCheckBig /><span>{checked}</span>
                        </li>
                    ))
                }
            </ul>
            <Button className={`mt-3 mb-8 text-white py-3 ${ptn_style}`}>Get Started</Button>
        </div>
    )
}

export default Plan
