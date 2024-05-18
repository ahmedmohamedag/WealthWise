import About_Section from "../components/sections/About_Section"
import Blog_Section from "../components/sections/Blog_Section"
import CTA_Section from "../components/sections/CTA_Section"
import Hero from "../components/sections/Hero"
import Investing_Section from "../components/sections/Investing_Section"
import Solution_Section from "../components/sections/Solution_Section"


const Home = () => {
  return (
    <>
      <Hero />
      <About_Section />
      <Solution_Section/>
      <Investing_Section/>
      <Blog_Section/>
      <CTA_Section/>
    </>
  )
}

export default Home
