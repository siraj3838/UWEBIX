import { RiFileList2Line } from "react-icons/ri";
import banner from "./../../assets/home-banner.jpg"

const Banner = () => {
    return (
        <div className="relative">
            {/* Banner */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-40 bg-[#318FED]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[820px] text-[#F2F9FF]">
                        <h3 className="text-4xl">Unlocking Potential</h3>
                        <h1 className="mb-5 text-6xl font-bold">Your Success, Our Commitment</h1>
                        <p className="mb-5 px-40">Uwebix agency is a creative and strategic platform that aims to transform dreams into realities by empowering brands and unlocking their full potential.</p>
                        <button className="bg-[#F38F23] text-[#F2F9FF] font-semibold px-8 py-1.5 rounded-md text-xl hover:scale-110 transition-all">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Banner Card */}
            <div className="absolute -bottom-28 left-[210px] max-w-[1041px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#F2F9FF] text-center">
                <div className="bg-[#4897E7] flex justify-center items-center px-4 py-10 rounded-lg">
                    <div>
                        <p className="text-6xl flex justify-center">
                            <RiFileList2Line></RiFileList2Line>
                        </p>
                        <h2 className="text-4xl font-semibold">25+ Project</h2>
                    </div>
                </div>
                <div className="bg-[#4897E7] flex justify-center items-center px-4 py-10 rounded-lg">
                    <div>
                        <p className="text-6xl flex justify-center">
                            <RiFileList2Line></RiFileList2Line>
                        </p>
                        <h2 className="text-4xl font-semibold">3 Years+ Experience</h2>
                    </div>
                </div>
                <div className="bg-[#4897E7] flex justify-center items-center px-4 py-10 rounded-lg">
                    <div>
                        <p className="text-6xl flex justify-center">
                            <RiFileList2Line></RiFileList2Line>
                        </p>
                        <h2 className="text-4xl font-semibold">20+ Client</h2>
                    </div>
                </div>
                <div className="bg-[#4897E7] flex justify-center items-center px-4 py-10 rounded-lg">
                    <div>
                        <p className="text-6xl flex justify-center">
                            <RiFileList2Line></RiFileList2Line>
                        </p>
                        <h2 className="text-4xl font-semibold">2 Award</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;