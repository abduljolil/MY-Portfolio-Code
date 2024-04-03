import { FaGitAlt, FaGithub, } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";


const OtherSkill = () => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure >
                <img   src="https://i.postimg.cc/MKr3xXFZ/flat-design-cms-illustration-23-2148822448.jpg" alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Other</h2>
                <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                        <span className="text-2xl"><FaGitAlt /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Git</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                        <span className="text-2xl"> <FaGithub /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Github</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                <div className="avatar w-5 h-5 rounded-full">
                        <img src="https://i.postimg.cc/5tWJmP1C/surge-logo-0-D5-D5-B0-AF9-seeklogo-com.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Surge</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                        <span className="text-2xl"><IoLogoFirebase /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Firebase</h1>
                    </div>
                </div>
          
                <div className="flex justify-center items-center gap-3">
                    <div className="avatar ">
                        <span><IoLogoVercel /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Vercel</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSkill;
