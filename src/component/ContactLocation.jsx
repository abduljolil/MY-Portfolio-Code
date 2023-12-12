import { CiLocationOn } from "react-icons/ci";

const ContactLocation = () => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">Pabna</h2>
                <div className="flex  items-center gap-3">
                    <div className="avatar">
                         <span className="text-5xl"><CiLocationOn /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Pabna Sadar,Rajshahi,bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactLocation;