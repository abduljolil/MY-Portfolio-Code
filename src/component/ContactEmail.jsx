import { TfiEmail } from "react-icons/tfi";

const ContactEmail = () => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">abduljolilma@gmail.com</h2>
                <div className="flex  items-center gap-3">
                    <div className="avatar">
                         <span className="text-5xl"><TfiEmail /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Personal Mail</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactEmail;