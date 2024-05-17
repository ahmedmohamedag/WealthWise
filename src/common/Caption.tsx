import { HTMLAttributes, ReactNode } from "react"

interface I_Props extends HTMLAttributes<HTMLElement>{
    children:ReactNode,
    
}
const Caption = ({children,...res}:I_Props) => {
    return (
        <caption className="uppercase text-secondary pb-4"  {...res}>{children}</caption>

    )
}

export default Caption
