import AboutSection from "../components/AboutSection"
import ContactSection from "../components/Contactsection"
import Hero from "../components/Hero"
import ServicesSection from "../components/Servicessection"
import TheyTrustUs from "../components/TheyTrustUs"
import WhyUsSection from "../components/Whyussection"

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <TheyTrustUs />
            <ServicesSection />
            <WhyUsSection />
            <ContactSection />
        </div>
    )
}

export default Home