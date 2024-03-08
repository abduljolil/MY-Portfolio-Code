 

const BrandShopCard = () => {
    return (
        <div className="w-[400px]">
        <figure>< img src='https://i.postimg.cc/dQCxD4wj/BranShop.png'  className="w-full rounded-lg h-[400px]" alt="Shoes" />
        <h2 className="text-center font-bold text-2xl py-5">Contraction-Company</h2>
        </figure>
        <div >
         <ul className="text-center space-y-2">
         <li className="px-8"><a  href="https://brand-shop-e0506.web.app"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">LiveLink</button></a></li>
            <li className="px-8"><a href="https://github.com/abduljolil/brandshop-frontend"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">FrontendLink</button></a></li>
            <li className="px-8"><a href="https://github.com/abduljolil/brandshop-backend"><button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500 w-full">BackendLink</button></a></li>
         </ul>
        </div>
    </div>
    );
};

export default BrandShopCard;