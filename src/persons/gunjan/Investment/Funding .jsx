

import React from "react";
import MovieCard from "@/persons/ayushi/MovieCard";
import Review from "../Project details/Review";
import LatestUpdates from "./Updateslist";
import MkLineChart from "../Project details/MkLineChart";


const Funding = () => {
  return (
  <div>
  <div className="mb-7">
    <MovieCard />
  </div>

  {/* Responsive layout */}
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left Column: Withdrawals + Reviews */}
    <div className="flex flex-col gap-2 w-full lg:w-8/12">
      <MkLineChart />
      <Review />
    </div>

    {/* Right Column: Latest Updates */}
    <div className="w-full lg:w-4/12">
      <LatestUpdates />
    </div>
  </div>
</div>


  );
};

export default Funding;
