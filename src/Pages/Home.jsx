import Banner from "../component/Banner";
import About from "./Home/About";
import Contact from "./Home/Contact";
import Projects from "./Home/Projects";
import Skills from "./Home/Skills";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;