import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Stats from "./Stats";
import Contact from "./Contact";
import Orders from "./Orders";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Stats />
        <Orders />
        <Contact />
        <Footer />
    </div>
  )
}

export default LandingPage