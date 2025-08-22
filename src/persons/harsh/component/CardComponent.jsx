import { useState } from 'react';
import pokemon from "../../../assets/harsh_assets/chava.jpg";// isko include mt karna 
// import CardDetails from '; // isko include mt karna 
import CardDetails from '../common/CardDetails';
import dhoni from "../../../assets/harsh_assets/bahubali_poster.jpg"


const CardComponent = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // isko remove kr dena 

    const handleMouseEnter = (card) => setHoveredCard(card);
    const handleMouseLeave = () => setHoveredCard(null);

    return (
        <div className='relative w-full max-w-[800px] h-[500px] mx-auto lg:mt-16 -mt-6 flex justify-center items-center'>

            {/* Card 1 */}
            <div
                className={`
                    absolute flex flex-col rounded-2xl text-black metallic-gold-bg font-poppins shadow-lg
                    transition-transform duration-300 
                    w-[220px] h-[300px]  sm:h-[300px] lg:w-[350px] lg:h-[470px]
                    ${hoveredCard === 'card1' ? 'z-10' : 'z-1'}
                    lg:left-32 left-8 sm:left-16
                    ${hoveredCard === 'card1' ? 'lg:translate-x-[-120px]' : ''}
                    ${hoveredCard === 'card1' ? 'lg:-rotate-8' : ''}
                `}
                style={{ zIndex: hoveredCard === 'card1' ? 5 : 1 }}
                onMouseEnter={() => handleMouseEnter('card1')}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredCard === 'card1' ? (
                    <CardDetails
                        title="Card 1"
                        movieimg={pokemon}
                        productionhousename="Ramoji"
                        Moviename="Chhava"
                        cost="1000"
                    />
                ) : (
                    <div className='flex flex-col h-full justify-between'>
                       <div className='w-full  h-full  lg:h-full p-[6px]'>
                            <img src={pokemon} className='object-cover' alt="Card 1" />
                        </div>
                        <div className='w-full  lg:mt-0 mt-12 flex flex-row justify-between p-2 sm:p-3 text-white text-xs lg:text-lg font-mono font-semibold '>
                        <p>14-02-25</p>
                        <p>CAD3$$</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Card 2 - Middle Card */}
            <div
                className={`
                    absolute flex flex-col rounded-2xl text-black metallic-platinum font-poppins shadow-2xl
                    transition-transform duration-300 
                     w-[220px] h-[300px]  sm:h-[300px] lg:w-[350px] lg:h-[470px]
                    ${hoveredCard === 'card2' ? 'z-10' : 'z-3'}
                    lg:top-0 top-[160px] sm:top-[180px]
                    ${hoveredCard === 'card2' ? 'lg:translate-x-0' : ''}
                `}
                onMouseEnter={() => handleMouseEnter('card2')}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredCard === 'card2' ? (
                    <CardDetails
                        title="Card 2"
                        movieimg={dhoni}
                        productionhousename="Yash Raj Films"
                        Moviename="Movie 2"
                        cost="1200"
                    />
                ) : (
                    <div className='flex flex-col h-full justify-between'>
                        <div className='w-full  h-full  lg:h-full p-[6px]'>
                            <img src={pokemon} className='object-cover' alt="Card 1" />
                        </div>
                        <div className='w-full  lg:mt-0 mt-12 flex flex-row justify-between p-2 sm:p-3 text-xs lg:text-lg font-semibold font-mono'>
                        <p>14-02-25</p>
                        <p>CAD3$$</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Card 3 */}
            <div
                className={`
                    absolute flex flex-col rounded-2xl text-black bg-black font-poppins shadow-lg
                    transition-transform duration-300 
                    w-[220px] h-[300px]  sm:h-[300px] lg:w-[350px] lg:h-[470px]
                    ${hoveredCard === 'card3' ? 'z-10' : 'z-1'}
                    lg:right-32 right-8 sm:right-16
                    ${hoveredCard === 'card3' ? 'lg:translate-x-[120px]' : ''}
                    ${hoveredCard === 'card3' ? 'lg:rotate-8' : ''}
                `}
                style={{ zIndex: hoveredCard === 'card3' ? 5 : 1 }}
                onMouseEnter={() => handleMouseEnter('card3')}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredCard === 'card3' ? (
                    <CardDetails
                        title="Card 3"
                        movieimg={pokemon}
                        productionhousename="Dharma Productions"
                        Moviename="Movie 3"
                        cost="1500"
                    />
                ) : (
                    <div className='flex flex-col h-full justify-between'>
                       <div className='w-full  h-full  lg:h-full p-[6px]'>
                            <img src={pokemon} className='object-cover' alt="Card 1" />
                        </div>
                        <div className='w-full  lg:mt-0 mt-12 flex flex-row justify-between p-2 sm:p-3 text-xs lg:text-lg font-mono font-semibold'>
                            <p>14-02-25</p>
                            <p>CAD3$$</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default CardComponent;
