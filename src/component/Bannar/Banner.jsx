import"./Bannar.css";

const Banner = () => {
    return (
        <div className="rounded-xl">
            <div className="hero min-w-screen  rounded-full " style={{ backgroundImage: 'url(https://i.postimg.cc/cCvYc1MT/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon-3942.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
             <div class="animate__animated animate__lightSpeedInRight">
             <h1 className="Text-animation  text-5xl font-bold"><span  data-text="Hover Text">Hi ,My <br />name is Abdul Jolil</span>
             </h1>
             </div>
                    
           
                    {/* <h1 id="name" className="mb-5 text-5xl font-bold"></h1> */}
                   <div   class="animate__animated animate__lightSpeedInLeft" >
                   <p className= " mb-5">
                        I'm MERN Stact Creative Web Developer from Pabna,Bangladesh
                    </p>
                   </div>
                </div>
            </div>
            <img className="w-90 h-60 rounded-full" src="https://i.postimg.cc/qMkg0vCF/hand-drawn-flat-design-devops-illustration-23-2149387396.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;