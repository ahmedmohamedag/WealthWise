import { managementTeam } from '../../data'

const ManagementSection = () => {
    return (
        <div className="">
            <h2 className="text-4xl py-7">Our Management</h2>
            <div className="grid items-center grid-cols-1 gap-6 px-5 my-16 xl:grid-cols-2 justify-items-center xl:justify-items-start">

                {
                    managementTeam.map((user, index) => (
                        <div key={index} className="relative items-center justify-center sm:p-5 sm:w-fit">
                            <img src={user.image} />
                            {/* Content */}
                            <div className="p-5 -translate-y-10 bg-white sm:-translate-y-1/2 md:absolute sm:top-1/2 rounded-b-3xl sm:-right-60 sm:rounded-3xl">
                                <h2 className="py-3 text-2xl">{user.name}</h2>
                                <span className="text-sm text-secondary">{user.caption}</span>
                                <p className="py-5 text-sm">Amet minim mollit non deserunt <br />ullamco est sit etsi aliqua dolor do amet <br />sint. Velit officia consequat duis enim<br /> velit mollit.</p>
                                <div className="flex gap-4 py-5">
                                    <span className="w-8 h-8 rounded-full bg-gray"></span>
                                    <span className="w-8 h-8 rounded-full bg-gray"></span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ManagementSection
