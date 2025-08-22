import MovieCard from '@/persons/ayushi/MovieCard'
import InvestmentOp from '@/persons/gunjan/Project details/InvestmentOp'
import Review from '@/persons/gunjan/Project details/Review'
import MkLineChart from './MkLineChart'
import React, { useEffect, useState } from 'react'
import useApiHandler from '@/hooks/useApiCall'
import { useNavigate, useParams } from 'react-router-dom'

const ProjectDetails = () => {


const { productid } = useParams();

//  overview page api is here now it is being pased to their respective pages

  const apiCaller = useApiHandler();
  const [overviewDetails, setOverviewDetails] = useState("");
  const [cardType,setCardtype]=useState("");
  const navigate = useNavigate();

 


  useEffect(() => {
    const getOverviewDetails = async () => {
      try {
        const response = await apiCaller(`/product/fetch-product-by-id?product_id=${productid}`, "get");
        // console.log("response of details", response);

        if (response?.data?.status_code === 200) {
          const card=response?.data?.data?.card_types[0];
          console.log("card",card);
          setCardtype(card);
          const Details = response?.data?.data?.product;
          // console.log("Fetched Details", Details);
          setOverviewDetails(Details);
        }
      } catch (error) {
        console.error("Error fetching overview details:", error);
        showErrorToast(error);
      }
    };

    getOverviewDetails();
  }, []);


  useEffect(() => {
    if (overviewDetails) {
      console.log("Updated overviewDetails:", overviewDetails);
    }
  }, [overviewDetails]);





  return (
    <div className='w-full font-Poppins mx-auto flex  flex-col justify-center  '>
      <div >
      <MovieCard overviewDetails={overviewDetails}/>
      </div>
      <div>
      <InvestmentOp overviewDetails={overviewDetails} cardType={cardType} ></InvestmentOp>

      </div>
      <div className="mt-10 sm:mt-5 lg:mt-16 md:mt-10 px-0 sm:px-4">
          <MkLineChart></MkLineChart>
        </div>
      <div className='mt-10 '>
        <Review></Review>
      </div>
      
      
    </div>
  )
}

export default ProjectDetails
