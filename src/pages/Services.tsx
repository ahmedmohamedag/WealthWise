import Blog_Services_Siction from "../components/servicesSections/Blog_Services_Siction"
import FeaturesSection from "../components/servicesSections/FeaturesSection"
import Finanial_Plan_Section from "../components/servicesSections/Finanial_Plan_Section"
import HeroServices from "../components/servicesSections/HeroServices"

const Services = () => {
  return (
    <section className="px-2 py-10">
      <HeroServices />
      <FeaturesSection />
      <Finanial_Plan_Section dir="lg:flex-row" />
      <Finanial_Plan_Section dir="lg:flex-row-reverse" />
      <Blog_Services_Siction />
    </section>
  )
}

export default Services
