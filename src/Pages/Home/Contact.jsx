

import Swal from 'sweetalert2';
 
import { useForm } from "react-hook-form"
import TitleSection from '../Share/TitleSection';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    console.log(email);
  
    const contactItem = {
      name: data.name,
      email: data.email,
      massage: data.massage,
    };
    console.log('contact',contactItem);
    axios.post('/contacts', contactItem)
      .then(res => {
        if (res.data.insertedId) {
          console.log('user added to the database');
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:  `Contact ${data.name} created successfully.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  
 
  return (
    <div>
        <TitleSection title='Contact Us'></TitleSection>
      <div className="text-center">
        <h1 className='text-2xl font-bold'>Contact From</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex sm:flex-col md:flex-row justify-center gap-5 lg:px-20">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
            {errors.name && <span>Name field is required</span>}

          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
            {errors.email && <span>Email field is required</span>}
          </div>
        </div>
        <div className="form-control w-full lg:px-20">
          <label className="label">
            <span className="label-text">Massage</span>
          </label>
          <input type="text" name="massage" {...register("massage", { required: true })} placeholder="Massage" className=" input input-bordered" required />
          {errors.massage && <span>Massage field is required</span>}
        </div>
        <div className="text-center py-5"><button type="submit"className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500">send massage</button></div>
      </form>
    </div>
  );
};

export default Contact;