import Logo from "../common/Logo"

const Footer = () => {
    return (
        <footer className=' sm:pt-6 sm:px-10'>
            <div className="container mx-auto rounded-t-[35px] px-[40px] pt-[30px] bg-blue">

                <div className="grid grid-cols-12   border-b border-b-slate-400 text-white py-8 ">
                    <div className="col-span-4">
                        <Logo />
                    </div>
                    <div className="col-span-6">

                    </div>
                </div>

                {/*  */}
                <div className="flex items-center justify-between py-4">
                    <span>© 2023 WealthWise, Inc.</span>
                    <span>Designed by Youness daoudi</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
