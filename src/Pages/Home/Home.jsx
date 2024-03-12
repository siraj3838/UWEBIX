import Banner from "./Banner";
import HomeAboutUs from "./HomeAboutUs";
import OurService from "./OurService";
import UWEBIXAgency from "./UWEBIXAgency";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UWEBIXAgency></UWEBIXAgency>
            <HomeAboutUs></HomeAboutUs>
            <OurService></OurService>
        </div>
    );
};

export default Home;