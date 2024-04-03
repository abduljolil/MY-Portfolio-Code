 

const ProjectFood = () => {
    return (
        <div className="w-[400px]">
        <figure>< img src='https://i.postimg.cc/c19JjsXC/Food-Restaurants.png' className="w-full rounded-lg h-[400px]" alt="Shoes" />
        <h2 className="text-center font-bold text-2xl py-5">Hotel-Booking</h2>
        </figure>
        <div >
         <ul className="text-center space-y-2">
         <li className="px-8"><a  href="https://food-restaurants-9cdf2.web.app"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">LiveLink</button></a></li>
            <li className="px-8"><a href="https://github.com/abduljolil/Food-Restaurant-Frontend"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">FrontendLink</button></a></li>
            <li className="px-8"><a href="https://github.com/abduljolil/Food-Restaurants-Server"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">BackendLink</button></a></li>
         </ul>
        </div>
    </div>
    );
};

export default ProjectFood;