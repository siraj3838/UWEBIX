import { FaPhoneAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { RiBehanceLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-[1315px] mx-auto h-[50px] text-[#F2F9FF]">
            <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                    <div className="text-xl">
                        <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    <div>
                        <p className="text-[14px]">+880 1768-247805</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="text-2xl">
                        <HiOutlineMail></HiOutlineMail>
                    </div>
                    <div>
                        <p className="text-[14px]">uwebixagency@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <p className="border-2 rounded-md">
                    <TiSocialFacebook></TiSocialFacebook>
                </p>
                <p className="border-2 rounded-md p-[1px] text-sm">
                    <RiBehanceLine></RiBehanceLine>
                </p>
                <p className="border-2 rounded-md">
                    <TiSocialLinkedin></TiSocialLinkedin>
                </p>
                <p className="text-xl text-[#F2F9FF]">
                    <RxInstagramLogo></RxInstagramLogo>
                </p>
                <p className="text-2xl">
                    <AiOutlineYoutube></AiOutlineYoutube>
                </p>
            </div>
        </div>
    );
};

export default Header;