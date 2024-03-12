import contentImg from '../../assets/Rectangle 5.png';
import svg from '../../assets/Internal.png'
import svg2 from '../../assets/Technical Support.png'
import svg3 from '../../assets/Loyalty.png'

const UWEBIXAgency = () => {
    return (
        <div className='max-w-[1315px] mx-auto mt-[228px] mb-[110px]'>
            <div className="flex justify-between items-center ">
                <div className="flex-1">
                    <h2 className='text-[38px] text-[#3A3939] mb-8 font-bold'>WHY YOU SHOULD CHOOSE <br />
                        <span className='text-[#3191F2]'>UWEBIX Agency?</span></h2>
                    <div className='flex justify-center gap-7'>
                        <div>
                            <img className='' src={svg} alt="" />
                        </div>
                        <div className='flex-1'>Our team is dedicated to ensuring that every interaction, whether it's within our internal teams or with our clients, is marked by clarity, respect, and openness. We believe in active listening, valuing diverse perspectives, and finding common ground to drive projects forward.</div>
                    </div>
                    <div className='flex justify-center gap-7 my-6'>
                        <div>
                            <img className='' src={svg2} alt="" />
                        </div>
                        <div className='flex-1'>At our agency, being result-driven means more than just completing tasks; it means focusing relentlessly on the end goal. From the initial consultation to the final implementation, we are laser-focused on delivering measurable results that drive business growth and innovation.</div>
                    </div>
                    <div className='flex justify-center gap-7'>
                        <div>
                            <img className='' src={svg3} alt="" />
                        </div>
                        <div className='flex-1'>At our agency, integrity permeates every aspect of our work. From our interactions with clients to the solutions we deliver, we prioritize honesty, transparency, and ethical conduct. We believe that doing what's right, even when no one is watching, is essential to building lasting relationships and fostering a culture of respect and accountability.</div>
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src={contentImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UWEBIXAgency;