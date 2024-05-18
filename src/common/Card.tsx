import { ReactNode } from "react"

interface I_Props {
    children: ReactNode
}
const Card = ({ children }: I_Props) => {
    return (
        <div className="bg-white flex flex-col items-center justify-center rounded-3xl py-8  sm:py-16 sm:pb-32 px-5 text-center">
            {children}
        </div>
    )
}

export default Card
