import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

const BackendSkill = () => {
   
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure  >
        <img src="https://i.ibb.co/HTW9SHf/back-end-developer-typographic-header-software-development-process-website-interface-design-improvem.jpg" alt="Shoes" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">Frontend</h2>
        <div className="flex justify-center items-center gap-3">
        <div className="avatar w-8 h-8 rounded-full">
        <img  src="https://i.ibb.co/JzrsCZH/Node-e71346fe0fec16ec5f6e.png" alt="Node.js" /> 
          </div>
          <div>
            <h1 className="text-xl font-bold">Node.js</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
        <div className="avatar w-8 h-8 rounded-full">
        <img  src="https://i.ibb.co/ZzSnHcF/redbubble-account.png" alt="Express.js" /> 
          </div>
          <div>
            <h1 className="text-xl font-bold">Express.js</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
   
        <div className="avatar w-8 h-8 rounded-full">
        <img  src="https://i.ibb.co/Yj3tswG/Mongo-DB-59b164ea828a81c4b39e.png" alt="MongoDB" /> 
          </div>
          <div>
            <h1 className="text-xl font-bold">MongoDB</h1>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default BackendSkill;
