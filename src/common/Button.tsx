import { ButtonHTMLAttributes, ReactNode } from "react"

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,

}
const Button = ({ children ,...res}: I_Props) => {
    return (
        <button className="rounded-xl px-10 py-2  bg-secondary flex items-center" {...res}>
            {children}
        </button>
    )
}

export default Button
