import TitleSection from "../Share/TitleSection";

 

const About = () => {
    return (
      
    <div>
          <TitleSection title='About Me'></TitleSection>
            <div className="hero   bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse  justify-center">
        <div className='lg:w-1/2'>
                 <h2 className="text-xl font-semibold">As a junior web developer with proficiency in HTML, CSS, React, JavaScript, MongoDB, Node.js, and Express, I bring a solid foundation to create dynamic and responsive web applications. I am proficient and comfortable working with the frontend technologies React and Tailwind CSS. My problem-solving skills, adaptability, and eagerness to learn make me a valuable asset. I am seeking a remote job where I can contribute to innovative projects, collaborate with a diverse team, and continue honing my skills. With a passion for clean, efficient code and a commitment to staying current with industry trends, I am ready to contribute to your company's success in a remote capacity.</h2>
            </div>
          <div className="lg:w-1/2" > <img src="https://i.postimg.cc/MHswzxCk/programming-concept-illustration-114360-1351.jpg" className=" w-full rounded- shadow-2xl" /></div>
           
          
        </div>
    </div>
    </div>
    );
};

export default About;