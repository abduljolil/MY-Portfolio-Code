import BrandShopCard from "../../component/BrandShopCard";
import ProjectCard from "../../component/ProjectCard";
import ProjectFood from "../../component/ProjectFood";
import ProjectHotel from "../../component/ProjectHotel";
import TitleSection from "../Share/TitleSection";
const  Projects = () => {
    return (
        <div>
            <TitleSection title=' My Projects'></TitleSection>
           <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectFood></ProjectFood>
           <ProjectCard></ProjectCard>
            <ProjectHotel></ProjectHotel>
            
           </div>
        </div>
    );
};

export default Projects;