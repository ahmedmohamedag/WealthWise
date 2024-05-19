
const ContactForm = () => {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col gap-5 py-8 ">
                <input className="p-3 focus:outline-none" type="text" placeholder="Name" />
                <input className="p-3 focus:outline-none" type="email" placeholder="Email" />
                <textarea className="p-3 focus:outline-none" rows={6} placeholder="Message" name="message" id="message"></textarea>
                <button className="py-2 text-white duration-300 rounded-2xl bg-blue hover:bg-secondary">Submit</button>
            </form>
        </>
    )
}

export default ContactForm
