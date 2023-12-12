 

const Banner = () => {
    return (
        <div className="hero min-w-screen relative " style={{ backgroundImage: 'url(https://i.ibb.co/N6R0KnF/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon-3942.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hi ,My <br />name is Abdul Jolil</h1>
                    <p className="mb-5">
                        I'm MERN Stact Creative Web Developer from Pabna,Bangladesh
                    </p>
                </div>
            </div>
            <img className="w-90 h-60 rounded-full" src="https://i.ibb.co/bNyYXQX/hand-drawn-flat-design-devops-illustration-23-2149387396.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;