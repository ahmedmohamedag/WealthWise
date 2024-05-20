import { Link } from "react-router-dom"
import Logo from "../common/Logo"

const footerLinks = [
    {
        title: "company",
        links: [
            {
                title: "home",
                path: "/",
            },
            {
                title: "services",
                path: "services",
            },
            {
                title: "pricing",
                path: "pricing",
            },
        ]
    },
    {
        title: "Information",
        links: [
            {
                title: "About",
                path: "about",
            },
            {
                title: "Blog",
                path: "blog",
            },
            {
                title: "Contact",
                path: "contact",
            }
        ]

    },
    {
        title: "social",
        links: [
            {
                title: "Linkedin",
                path: "#",
            },
            {
                title: "Facebook",
                path: "#",
            },
            {
                title: "Instagram",
                path: "#",
            }
        ]
    }
]

const Footer = () => {
    return (
        <footer className='px-2 text-center sm:pt-6 sm:px-10 sm:text-start'>
            <div className="container mx-auto rounded-t-[35px] md:px-[40px] pt-[30px] bg-blue">

                <div className="grid grid-cols-1 py-8 text-white border-b md:grid-cols-12 border-b-slate-400 ">
                    <div className="mx-auto text-4xl md:col-span-5 pb-7 sm:ms-0">
                        <Logo />
                    </div>

                    <div className="grid col-span-7 md:grid-cols-3">
                        {
                            footerLinks.map((link,index) => (
                                <div key={index} className="m-2 capitalize ">
                                    <h3 className="pb-3 text-2xl text-secondary">{link.title}</h3>
                                    <ul>
                                        {
                                            link.links.map((link, index) => (
                                                <li key={index} className="py-2">
                                                    <Link to={link.path} className="text-xl hover:text-light-blue ">{link.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>

                {/*  */}
                <div className="flex flex-col items-center justify-between py-4 text-white text-[22px] md:flex-row">
                    <span>© 2023 WealthWise, Inc.</span>
                    <span className="py-2">Designed by Youness daoudi</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
