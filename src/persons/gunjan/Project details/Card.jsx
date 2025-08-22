import React from 'react'
import poster from '../../../assets/Gunjan/poster.png'
import useApiHandler from '@/hooks/useApiCall';
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';


function Card({amount,name, colorbg,overviewDetails,cardType}) {
  const apicaller= useApiHandler();



// decimal truncation function
  function truncateToTwoDecimals(number) {
  return Math.floor(number * 100) / 100;
}


  
   const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate(); // No leading zero
  const month = date.getMonth() + 1; // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// calling add to cart api it takes two parameter name of card and card type id which comes from cardType i.e fecth-product-by id api

const HandlecartAddition = async (name,card_type_id)=>{
  const cardname= name.toLowerCase();
  try{
    
        const response= await apicaller(`/user/cart/generic_add_card?card_type_id=${card_type_id}&card_type=${cardname}`,"PUT",
          
        )
        console.log("cartres",response);
        showSuccessToast("item Added tom Cart successfully");
        
    
     
  }
  catch(e){
    showErrorToast("SOmething went Wrong ")
;
  }
}



 
  
  

  return (
    <div className={`w-[308px] h-[622px] rounded-[25px] flex justify-center items-center relative font-poppins  
    transition-transform duration-300 transform hover:scale-105  `}>

    <div>
      <div className="w-[308px] h-[622px] rounded-[25px] border border-black bg-white relative mt-5
    transition-all duration-300 hover:translate-x-[14px] hover:-translate-y-[14px] hover:w-[340px] hover:h-[642px]  hover:z-40 group ">
         {/* Button Positioned at the Top Center */}
         <button className={`absolute top-[-21.75px] left-1/2 transform -translate-x-1/2 w-[115px] h-[43.5px] ${colorbg} text-white rounded-lg  text-[28px]
          transition-all duration-300 group-hover:left-auto group-hover:right-[-100px]`}>
            
            {
              name=="PRO" && (
                   cardType?.pro_card_value

              )

                              
            }
            {
              name=="DIAMOND" && (
                cardType?.diamond_card_value
              )
            }
            {
              name=="GOLD" && (
                 cardType?.gold_card_value
              )
            }

        </button>
        {/* Black Div for Image Placement - Centered Properly */}
     
        <div className="flex w-fit justify-center items-center mx-auto">
  <div className="relative flex items-center justify-center mt-16 mb-7">
    {/* PRO CARD text in corners */}
    <h1 className="absolute top-[-23px] left-[50%] transform -translate-x-1/2 text-[16px] font-bold transition-all duration-300 whitespace-nowrap w-[100px] text-center group-hover:text-[18px] group-hover:top-[-28px]">
      {name} CARD
    </h1>
    <h1 className="absolute bottom-[-25px] left-[50%] transform -translate-x-1/2 text-[16px] font-bold flex transition-all duration-300 whitespace-nowrap w-[100px] text-center group-hover:text-[18px] group-hover:bottom-[-27px]">
      {name} <span className="pl-1">CARD</span>
    </h1>
    <h1 className="absolute left-[-59px] top-[50%] transform -translate-y-1/2 rotate-[-90deg] text-[16px] font-bold transition-all duration-300 whitespace-nowrap w-[100px] text-center group-hover:text-[18px]">
      {name} CARD
    </h1>
    <h1 className="absolute right-[-59px] top-[50%] transform -translate-y-1/2 rotate-[-90deg] text-[16px] font-bold transition-all duration-300 whitespace-nowrap w-[100px] text-center group-hover:text-[18px]">
      {name} CARD
    </h1>

    {/* Main Card */}
    <div className={`w-[222px] h-[270.65px] ${colorbg} rounded-[5px] flex flex-col justify-center items-center p-2 font-poppins relative mx-auto`}>

      {/* Top Row */}
      <div className="w-full flex justify-between pt-1">
        <h2 className="text-white text-[12px]">{overviewDetails?.product_name}</h2>
        <h2 className="text-white text-[10px]">#K035</h2>
      </div>
      {/* Image */}
      <img src={overviewDetails?.poster_image} alt="Image" className="w-full h-full object-cover rounded-[5px] mt-0.5 mb-3" />
    </div>
  </div>
</div>

{/* <h1  className='text-[18px] font-bold ml-43 transition-all duration-300 group-hover:text-[22px] group-hover:ml-41'>{name} CARD</h1> */}
<div className='flex flex-col mx-auto mt-3 mb-3'>
<div className="bg-blue-500 text-white font-bold py-2 px-2  mb-4 flex justify-center items-center whitespace-nowrap text-[12px]">
  <span>TILL</span>
  <span className="mx-1">•</span>
  <span>{formatDate(overviewDetails?.end_date)}</span>
  <span className="mx-1">•</span>
  <span>VALID TILL</span>
  <span className="mx-1">•</span>
  <span>{formatDate(overviewDetails?.release_date)}</span>
</div>
<div className="w-[234px] h-[72px] border-[4px] border-[#0C8281] rounded-[15px] flex flex-col justify-center items-center text-center relative mb-3 mx-auto">
  <div className="absolute top-[-10px] left-0 right-0 flex items-center justify-center">
    
    <h2 className="text-[#0C8281] font-poppins text-[14px] mx-2 bg-white px-2">ROI & Perks</h2>
    
  </div>
  <p className="text-black text-[14px] font-poppins font-bold  mt-2.5">

    {
      name=="PRO" && (
        truncateToTwoDecimals(cardType?.royalty_share_pro)
      )
    }
    {
       name=="GOLD" && (
        truncateToTwoDecimals(cardType?.royalty_share_gold)
      )

    }
    {
       name=="DIAMOND" && (
        truncateToTwoDecimals(cardType?.royalty_share_diamond)
      )
    }
    
    
    
     % Royalty Shares</p>
 <p className="text-black text-[14px] font-poppins font-bold">
  Reward Coins:
  {
    name === "PRO" && Math.floor(cardType?.extra_reward_pro || 0)
  }
  {
    name === "GOLD" && Math.floor(cardType?.extra_reward_gold || 0)
  }
  {
    name === "DIAMOND" && Math.floor(cardType?.extra_reward_diamond || 0)
  }
  X
</p>

</div>

<button className="w-[143px] h-[36px] rounded-[8px] flex items-center justify-center text-black font-bold  text-[12px] relative bg-white mx-auto shadow-md">
  <div className="absolute inset-0 rounded-[8px] border-[2px] border-transparent bg-gradient-to-r from-[#9DD4C6] to-[#FFE655] p-[2px]">
  <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center relative z-10">
    See ROI Projection
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 text-[#0C8281]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 13h3v7H4v-7zm5-5h3v12H9V8zm5 3h3v9h-3v-9zm5-6h3v15h-3V5z" />
    </svg>
  </div>
  </div>
</button>
  <div className="flex space-x-2 mx-auto mt-3">
  <button className="w-[113px] h-[31px] bg-[#0C8281] border-[3px] border-black text-white font-medium text-[14px] rounded-[6px] flex items-center justify-center">
    BUY NOW
  </button>
  <button onClick={()=>{HandlecartAddition(name,cardType?.card_type_id)}} className="w-[113px] h-[31px] cursor-pointer hover:scale-105 hover:bg-teal-600 hover:text-white bg-white border-[3px] border-[#0C8281] text-[#0C8281] font-medium text-[14px] rounded-[6px] flex items-center justify-center">
    ADD TO CART
  </button>
</div>
<p className="text-[14px] text-[#0C8281]  underline decoration-[#0C8281] mx-auto mt-1">Purchase Policy</p>
</div>

 </div>
 <div className='pt-3 bg-white '>
<div className="w-[90px] h-[36px] border-2 px-2.5  border-dotted border-[#0C8281] rounded-[4px] flex flex-col items-center justify-center text-center mx-auto leading-[1]">
  <div className="text-[14px] font-bold text-black">


     {
      name=="PRO" && (
       cardType?.available_pro_card
      )
    }
    {
       name=="GOLD" && (
       cardType?.available_gold_card
      )

    }
    {
       name=="DIAMOND" && (
        cardType?.available_diamond_card
      )
    }
    
    
    
     <span className="text-gray-600 font-poppins">
      /
       {
      name=="PRO" && (
       cardType?.total_no_of_pro_card
      )
    }
    {
       name=="GOLD" && (
       cardType?.total_no_of_gold_card
      )

    }
    {
       name=="DIAMOND" && (
        cardType?.total_no_of_diamond_card
      )
    }
    
      
      
      </span>
  </div>
  <div className="text-[14px] flex font-poppins text-[#0C8281] mt-[-2px]">Cards <span className='ml-1'>Left</span></div>
</div>
</div>
 </div>
    </div>
  )
}

export default Card
