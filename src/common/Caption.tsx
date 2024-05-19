import { HTMLAttributes, ReactNode } from "react"

interface I_Props extends HTMLAttributes<HTMLElement>{
    children:ReactNode,
    className?:string
    
}
const Caption = ({children,className,...res}:I_Props) => {
    return (
        <caption className={`${className} uppercase text-secondary pb-4 inline-block`}  {...res}>{children}</caption>

    )
}

export default Caption
