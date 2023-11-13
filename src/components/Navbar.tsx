import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
    return (
        <>
            <header className="header border-[1px] rounded-b-3xl">
                <NavLink to="/">
                    <img 
                        src={logo} 
                        alt='logo' 
                        className='w-18 h-18 object-contain' 
                    />
                </NavLink>
                <nav className="flex items-center text-lg gap-7 font-medium">
                    <NavLink 
                        to='/about' className={({ isActive }) => isActive ? "text-blue-600 underline" : "text-black" }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/projects' 
                        className={({ isActive }) => isActive ? "text-blue-600 underline" : "text-black"}
                    >
                        Projects
                    </NavLink>
                    <button className="bg-black text-white px-4 py-1 rounded-lg">
                        <a href="https://github.com/NguyenBao23131" target="_blank">
                            GitHub
                        </a>
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Navbar;