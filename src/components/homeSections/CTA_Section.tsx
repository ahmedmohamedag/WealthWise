import Button from "../../common/Button"

const CTA_Section = () => {
  return (
    <section className="flex flex-col items-center justify-between px-6 py-10 bg-white rounded-3xl sm:flex-row sm:p-10">
      <div className="text-center sm:text-start ">
        <h2 className="py-8 text-2xl sm:text-3xl lg:text-6xl">Simplifying Complexity with<br/> Innovative Solutions</h2>
        <Button className="w-full mt-7 sm:w-fit">Get Started</Button>
      </div>
      <img src="CTA.png" alt="CTA.png" className="py-8 w-60 lg:w-auto sm:py-0 "/>
    </section>
  )
}

export default CTA_Section
0