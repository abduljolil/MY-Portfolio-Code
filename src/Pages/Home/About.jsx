import TitleSection from "../Share/TitleSection";

 

const About = () => {
    return (
      
    <div>
          <TitleSection title='About Me'></TitleSection>
            <div className="hero   bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div className='w-1/2  p-10'>
                 <h2 className="text-xl font-semibold">As a junior web developer with proficiency in HTML, CSS, React, JavaScript, MongoDB, Node.js, and Express, I bring a solid foundation to create dynamic and responsive web applications. I am proficient and comfortable working with the frontend technologies React and Tailwind CSS. My problem-solving skills, adaptability, and eagerness to learn make me a valuable asset. I am seeking a remote job where I can contribute to innovative projects, collaborate with a diverse team, and continue honing my skills. With a passion for clean, efficient code and a commitment to staying current with industry trends, I am ready to contribute to your company's success in a remote capacity.</h2>
            </div>
          <div className="w-1/2"> <img src="https://i.ibb.co/1qb3Swc/person-front-computer-working-html-23-2150040428.jpg" className=" w-full rounded- shadow-2xl" /></div>
           
          
        </div>
    </div>
    </div>
    );
};

export default About;