import Banner from "../component/Banner";
import About from "./Home/About";
import ContactUs from "./Home/ContactUs";
import Projects from "./Home/Projects";
import Skills from "./Home/Skills";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <About></About>
            <Projects></Projects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;