import { LuPhoneCall } from "react-icons/lu";

const ContactPhone = () => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl">+8801708746200</h2>
                <div className="flex  items-center gap-3">
                    <div className="avatar">
                         <span className="text-5xl"><LuPhoneCall /></span>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Personal Phone</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPhone;