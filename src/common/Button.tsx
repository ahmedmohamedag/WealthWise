import { ButtonHTMLAttributes, ReactNode } from "react"

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className:string,

}
const Button = ({ children,className,...rest}: I_Props) => {
    return (
        <button className={`${className} rounded-xl px-10 py-2  bg-secondary flex items-center justify-center`} {...rest}>
            {children}
        </button>
    )
}

export default Button
