 
import BackendSkill from "../../component/BackendSkill";
import FrontendSkill from "../../component/FrontendSkill";
import OtherSkill from "../../component/Others";
import TitleSection from "../Share/TitleSection";

 

const Skills = () => {
    return (
        <div>
            <TitleSection title='My Skills'></TitleSection>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            <FrontendSkill></FrontendSkill>
             <BackendSkill></BackendSkill>
             <OtherSkill></OtherSkill>
            </div>
        </div>
    );
};

export default Skills;