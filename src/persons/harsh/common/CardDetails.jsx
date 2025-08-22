import React from 'react';

const CardDetails = ({ title, movieimg, productionhousename, Moviename, cost }) => { // isme title movieimg etc aap remove kr dena uski jagah hardcoded value apne acording daal dena  jaise ki movie name price etc

    // Function to get dynamic background class
    const getBackgroundClass = (title) => {
        switch (title?.toLowerCase()) {
            case 'card 1':
                return 'metallic-gold-bg'; // Gold-like
            case 'card 2':
                return 'metallic-platinum'; // Silver-like
            case 'card 3':
                return 'bg-black'; // Bronze-like
            default:
                return 'bg-gray-200'; // Default/fallback background
        }
    };

    const backgroundClass = getBackgroundClass(title);

    return (
        <div className={`w-full max-w-xs sm:max-w-md lg:max-w-sm  rounded-lg overflow-hidden text-white shadow-lg p-3 sm:p-4 lg:p-3 font-poppins transition-all duration-300 ${backgroundClass}`}>
            
            {/* Movie Image */}
            <div className='w-full h-[100px] sm:h-[150px] lg:h-[200px] flex justify-center items-center  '>
                <img src={movieimg} alt={Moviename} className=' w-full h-full object-cover rounded-t-2xl' />
            </div>

            {/* Production House */}
            <div className='flex items-center gap-2 mt-2 sm:mt-3 '>
                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black'></div>
                <span className='text-xs sm:text-sm lg:text-lg font-semibold'>{productionhousename}</span>
            </div>

            {/* Movie Name & Cost */}
            <div className='flex flex-col items-center my-1 gap-4 sm:my-2 lg:my-3 text-center'>
                <p className='text-sm sm:text-base lg:text-xl font-semibold'>{Moviename}</p>
                <span className='bg-blue-600 text-black text-xs sm:text-sm lg:text-lg px-1 sm:px-3 py-1 rounded-xl'>{cost} Rs</span>
                <p className='text-xs sm:text-sm mt-1'>0.6% Royalty Shares + Reward Coins</p>
            </div>

            {/* Project Status */}
            <div className='flex justify-between items-center w-full my-1 sm:my-2 lg:my-3'>
                <p className='font-semibold text-xs sm:text-sm lg:text-base'>Project Status</p>
                <div className='bg-amber-300 text-black px-2 sm:px-4 py-1 rounded-md text-xs sm:text-sm'>
                    Ongoing
                </div>
            </div>

            {/* Footer - Year, KP, ID */}
            <div className='flex justify-between text-xs sm:text-sm lg:text-xl'>
                <p>2024</p>
                <p>KP</p>
                <p>KP01#</p>
            </div>
        </div>
    );
};

export default CardDetails;
