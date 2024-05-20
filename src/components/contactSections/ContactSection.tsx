import Caption from '../../common/Caption'
import { Linkedin, Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import ContactForm from '../../common/ContactForm';

const ContactSection = () => {
    return (
        <div className="grid gap-4 py-12 md:grid-cols-2">
            <div className="flex flex-col justify-center py-10 text-white bg-blue rounded-3xl px-7">
                {/*  */}
                <div className="pb-10">
                    <Caption className="py-5">LOCATION</Caption>
                    <h3>Greenfields, Citytown,</h3>
                    <h3>London, UK, 52050</h3>
                </div>
                {/*  */}
                <div className="pb-10">
                    <Caption className="py-5">WORKING HOURS</Caption>
                    <h3>Monday To Friday</h3>
                    <h3>9:00 AM to 8:00 PM</h3>
                    <span className="text-black">Our Support Team is available 24Hrs</span>
                </div>
                {/*  */}
                <div className="pb-10">
                    <Caption className="py-5">CONTACT US</Caption>
                    <h3>020 7993 2905</h3>
                    <h3>Email@gmail.com</h3>
                </div>
                {/* ICON */}
                <div className="flex gap-4">
                    <Twitter color="#ffffff" className="w-10 h-10 p-2 rounded-full bg-slate-300" />
                    <Facebook color="#ffffff" className="w-10 h-10 p-2 rounded-full bg-slate-300" />
                    <Linkedin color="#ffffff" className="w-10 h-10 p-2 rounded-full bg-slate-300" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="">
                    <Caption>CONTACT</Caption>
                    <h2 className="py-4 text-4xl">Let’s get Started!</h2>
                    <p>Fill up the Form and our team will get back to within 24 hrs</p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactSection
