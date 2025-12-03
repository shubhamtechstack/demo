import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import ProgrammingLanguages from "./TechStackExplorer"
import FrontendDevelopment from "./ToolBasedLearning"
import CareerRoadmaps from "./CareerRoadmaps"
export default function Tech(){
    return(
        <>
        <ProgrammingLanguages/>
        <FrontendDevelopment/>
        <CareerRoadmaps/>
        <Footer/>
        </>
    )
}