import About_Section from "../components/homeSections/About_Section"
import Blog_Section from "../components/homeSections/Blog_Section"
import CTA_Section from "../components/homeSections/CTA_Section"
import Hero_Section from "../components/homeSections/Hero_Section"
import Investing_Section from "../components/homeSections/Investing_Section"
import Solution_Section from "../components/homeSections/Solution_Section"


const Home = () => {
  return (
    <>
      <Hero_Section />
      <About_Section />
      <Solution_Section/>
      <Investing_Section/>
      <Blog_Section/>
      <CTA_Section/>
    </>
  )
}

export default Home
