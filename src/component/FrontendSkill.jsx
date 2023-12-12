import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

const FrontendSkill = () => {
 
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure  >
        <img src="https://i.ibb.co/tYZStz3/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-codi.jpg" alt="Shoes" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">Frontend</h2>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
          <span className="text-2xl"><FaHtml5 /></span>
          </div>
          <div>
            <h1 className="text-xl font-bold">HTML</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
          <span className="text-2xl"> <FaCss3Alt /></span>
          </div>
          <div>
            <h1 className="text-xl font-bold">CSS</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
          <span className="text-2xl"><TbBrandJavascript /></span>
          </div>
          <div>
            <h1 className="text-xl font-bold">JavaScript</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar w-12 h-12 rounded-full">
        <img  src="https://i.ibb.co/Ks5z8vw/id-I9er-Ptdw.jpg" alt="" /> 
          </div>
          <div>
            <h1 className="text-xl font-bold">Tailwind</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
          <span className="text-2xl"><FaReact /></span>
          </div>
          <div>
            <h1 className="text-xl font-bold">React</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkill;
