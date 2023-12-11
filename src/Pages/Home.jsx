import Banner from "../component/Banner";
import About from "./Home/About";
import Contact from "./Home/Contact";
import MySkills from "./Home/MySkills";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;