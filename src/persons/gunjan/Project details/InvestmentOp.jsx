import React from 'react'
import Card from './Card'



function InvestmentOp({overviewDetails,cardType}) {


  return (
<div className=" w-full lg:h-[890px] py-0 lg:py-0 sm:px-4 px-0  rounded-[15px] justify-center mx-auto items-center  overflow-x-hidden overflow-y-hidden">
  <div className="w-full max-w-full justify-center mx-auto sm:p-6 p-0">
    <h1 className="text-[22px] font-bold font-[Poppins] sm:px-0 px-4 pb-2">Investment Options</h1>
    <h2 className="text-[16px] font-[Poppins] text-[#37474F] sm:px-0 px-4 pb-6 sm:pb-0 lg:pb-12 md:pb-12">
      ROI payouts are distributed based on the success of the project within the 12-month period.
    </h2>

    {/* Responsive Flex Container */}
    <div className="flex flex-col gap-y-[90px]    lg:flex-row lg:gap-[50px] md:gap-y-26 lg:gap-x-6 justify-center   pt-10 mx-auto md:items-center md:justify-center">
      <div className="w-full ml-[40px] md:max-w-[400px] ">
        <Card overviewDetails={overviewDetails} cardType={cardType} amount="100" name="PRO" colorbg="bg-black" hoverbgcl />
      </div>
      <div className="w-full ml-[40px] md:max-w-[400px]">
        <Card  overviewDetails={overviewDetails} cardType={cardType} amount="250" name="GOLD" colorbg="metallic-gold-bg" />
      </div>
      <div className="w-full   ml-[40px] md:max-w-[400px]">
        <Card  overviewDetails={overviewDetails} cardType={cardType} amount="500" name="DIAMOND" colorbg="metallic-platinum" />
      </div>
    </div>
  </div>
</div>








    
  )
}

export default InvestmentOp
