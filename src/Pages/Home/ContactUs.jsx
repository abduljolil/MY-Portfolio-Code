import ContactEmail from "../../component/ContactEmail";
import ContactLocation from "../../component/ContactLocation";
import ContactPhone from "../../component/ContactPhone";
import TitleSection from "../Share/TitleSection";

 

const ContactUs = () => {
    return (
    <div className="hero-content flex-col lg:flex-row-reverse gap-5">
      <div className=" flex-col space-y-3">
        <ContactLocation></ContactLocation>
        <ContactEmail></ContactEmail>
        <ContactPhone></ContactPhone>
      </div>
          <div>
        <TitleSection title='Contact Us'></TitleSection>
      <div className="text-center">
        <h1 className='text-2xl font-bold'>Get In Touch</h1>
      </div>
      <form action="https://formsubmit.co/150c5c5a69ac120994baba401fa4bf93" method="POST">
        <div className=" flex sm:flex-col md:flex-row justify-center gap-5 lg:px-20">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email"   placeholder="email" className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control w-full lg:px-20">
          <label className="label">
            <span className="label-text">Massage</span>
          </label>
          <input type="text" name="massage"  placeholder="Massage" className=" input input-bordered" required />
        </div>
        <div className="text-center py-5"><button type="submit"className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500">send massage</button></div>
      </form>
    </div>
    </div>
    );
};

export default ContactUs;