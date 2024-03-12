import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {
    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "text-base font-medium text-[#515355]" : isActive ? "text-base font-medium text-[#515355]" : "text-base font-medium text-[#515355]"
            }
        >
            <h3 className="hover:scale-110 transition-all">Home</h3>
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "text-base font-medium text-[#515355]" : isActive ? "text-base font-medium text-[#515355]" : "text-base font-medium text-[#515355]"
            }
        >
            <h3 className="hover:scale-110 transition-all">About</h3>
        </NavLink>
        <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
                isPending ? "text-base font-medium text-[#515355]" : isActive ? "text-base font-medium text-[#515355]" : "text-base font-medium text-[#515355]"
            }
        >
            <h3 className="hover:scale-110 transition-all">Service</h3>
        </NavLink>
        <NavLink
            to="/project"
            className={({ isActive, isPending }) =>
                isPending ? "text-base font-medium text-[#515355]" : isActive ? "text-base font-medium text-[#515355]" : "text-base font-medium text-[#515355]"
            }
        >
            <h3 className="hover:scale-110 transition-all">Project</h3>
        </NavLink>
    </>
    return (
        <div>
            <div className="bg-[#3191F2]">
                <Header></Header>
            </div>
            <div className="bg-[#F2F9FF]">
                <div className="max-w-[1315px] mx-auto h-[70px] flex justify-between items-center">
                    <div>
                        Logo
                    </div>
                    <div className="flex items-center gap-12">
                        {navList}
                    </div>
                    <div>
                        <button className="bg-[#F38F23] text-[#F2F9FF] font-semibold px-8 py-1.5 rounded-lg text-xl hover:scale-110 transition-all">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;