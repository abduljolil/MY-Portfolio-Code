
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";




const Navbar = () => {

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='skills'>My Skills</Link></li>
        <li><Link to='projects'>My Projects</Link></li>
        <li><Link to='contact'>Contact</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="text-xl font-bold ">
                            {links}
                        </div>
                    </ul>
                    <div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <img className="w-16 h-16 rounded-full" src="https://i.postimg.cc/6Q62BVbF/315141262-510431661100654-665141888446761230-n.jpg" alt="" />
                            <h1>ABDUL JOLIL</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://drive.google.com/file/d/1xB6DA3I2TqTfPKaNk2R_rZazoul5mo1y/view?usp=sharing" className=" btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500">Resume <span><IoMdDownload /></span></a>
            </div>
        </div>
    );
};

export default Navbar;