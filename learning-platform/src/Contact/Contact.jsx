import ContactHero from "./ContactHero"
import Navbar from "../Home/Navbar"
import Footer from  "../Home/Footer"
import ContactForm from "./ContactForm"
import SupportSection from "./SupportSection"
function Contact(){
    return(
        <>
        <Navbar/>
        <ContactHero/>
        <ContactForm/>
        <SupportSection/>
        <Footer/>
        </>
    )
}
export default Contact