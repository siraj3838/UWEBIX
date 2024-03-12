import backgroundFrame from '../../assets/Frame.png'
import contentImg from '../../assets/Rectangle 6.png'
import contentImg2 from '../../assets/Rectangle 33.png'
import line from '../../assets/Line 5.png'


const HomeAboutUs = () => {
    return (
        <div className="max-w-[1315px] mx-auto">
            <div className='flex justify-between gap-28 relative mb-[100px] lg:h-[470px]' style={{ backgroundImage: `url(${backgroundFrame})`}}>
                <div className='flex-1'>
                    <img src={contentImg} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='space-y-4'>
                        <h3 className='flex items-center gap-3 text-[#3191F2] mb-4'>About us <img src={line} alt="" /></h3>
                        <h2 className='text-[38px] font-bold leading-10'>Empowering Your Digital Journey: <span className='text-[#3191F2]'>Your Trusted IT</span> Solutions Partner</h2>
                        <p className='mt-4 mb-8'>Uwebix Agency  is a comprehensive IT service provider specializing in web development, web design, UI/UX design, and other services. With a team of skilled professionals, they create innovative, user-friendly solutions, combining functionality with aesthetics. They offer services like website creation, custom web application development, and user experience enhancement.</p>
                        <button className="bg-[#F38F23] text-[#F2F9FF] font-semibold px-8 py-1.5 rounded-md text-xl hover:scale-110 transition-all">Learn More</button>
                    </div>
                </div>
                {/* extra image */}
                <div className='absolute -bottom-[14px] left-20'>
                    <img src={contentImg2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeAboutUs;