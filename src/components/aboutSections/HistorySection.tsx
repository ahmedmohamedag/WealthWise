import { historyData } from '../../data'
import { TrendingUp } from 'lucide-react'

const HistorySection = () => {
    return (
        <div className="px-3 py-10">
            <h2 className="text-4xl md:text-6xl">History</h2>
            <div className="grid items-center grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                {
                    historyData.map((item, index) => (
                        <div className="py-10 md:px-4 justify-self-center" key={index}>
                            <TrendingUp size={50} color="#F4B100" />
                            <h2 className="py-6 text-3xl">{item.year}</h2>
                            <p className="py-4">{item.body}</p>
                            <span className="text-zinc-400 justify-self-end">{item.date}</span>
                            {/* Under Line */}
                            <div className="relative w-full h-1 mt-8 bg-gray">
                                <span className="absolute left-0 w-4 h-4 -translate-y-1/2 rounded-full bg-secondary"></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HistorySection
