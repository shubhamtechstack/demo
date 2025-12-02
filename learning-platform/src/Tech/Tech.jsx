import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import ProgrammingLanguages from "./TechStackExplorer"
import FrontendDevelopment from "./ToolBasedLearning"
import CareerRoadmaps from "./CareerRoadmaps"
export default function Tech(){
    return(
        <>
        <Navbar/>
        <ProgrammingLanguages/>
        <FrontendDevelopment/>
        <CareerRoadmaps/>
        <Footer/>
        </>
    )
}