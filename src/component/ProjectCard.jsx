 

const ProjectCard = ( ) => {
    return (
    <div className="w-[400px]">
        <figure>< img src='https://i.postimg.cc/mrrnD4gP/Construction3.png'  className="w-full rounded-lg h-[400px]" alt="Shoes" />
        <h2 className="text-center font-bold text-2xl py-5">Contraction-Company</h2>
        </figure>
        <div >
         <ul className="text-center space-y-2">
         <li className="px-8"><a  href="https://assingment-12-frontend.web.app"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">LiveLink</button></a></li>
            <li className="px-8"><a href="https://github.com/abduljolil/INSUSTRIAL-CONSTRUCTION-COMPANY-FRONTEND"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">FrontendLink</button></a></li>
            <li className="px-8"><a href=""><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">BackendLink</button></a></li>
         </ul>
        </div>
    </div>
    );
};

export default ProjectCard;