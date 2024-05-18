import Button from "../../common/Button"

const CTA_Section = () => {
  return (
    <section className="rounded-3xl bg-white flex flex-col sm:flex-row items-center justify-between py-10 px-6 sm:p-10">
      <div className="text-center sm:text-start">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl ">Simplifying Complexity with Innovative Solutions</h2>
        <Button className="mt-3 w-full sm:w-fit">Get Started</Button>
      </div>
      <img src="CTA.png" alt="CTA.png" className="w-60 lg:w-auto py-8 sm:py-0 "/>
    </section>
  )
}

export default CTA_Section
0