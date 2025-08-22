import React from "react";
import profile from "../../../assets/Shreya_assets/profile.png";

const updates = [
  {
    id: 1,
    title: "Killer Peter",
    message: "Now Streaming on Netflix",
    time: "2 hours ago",
    thumbnail: profile,
  },
  {
    id: 2,
    title: "Omniscient Reader's Viewpoint",
    message: "Production Begins Next Month!",
    time: "6 hours ago",
    thumbnail: profile,
  },
  {
    id: 3,
    title: "Killer Peter",
    message: "Next Payout Scheduled for March 28, 2025",
    time: "1 day ago",
    thumbnail: profile,
  },
  {
    id: 4,
    title: "Killer Peter",
    message: "Next Payout Scheduled for March 28, 2025",
    time: "1 day ago",
    thumbnail: profile,
  },
  {
    id: 5,
    title: "Killer Peter",
    message: "Next Payout Scheduled for March 28, 2025",
    time: "1 day ago",
    thumbnail: profile,
  },
  {
    id: 6,
    title: "Killer Peter",
    message: "Next Payout Scheduled for March 28, 2025",
    time: "1 day ago",
    thumbnail: profile,
  },
  {
    id: 7,
    title: "Killer Peter",
    message: "Next Payout Scheduled for March 28, 2025",
    time: "1 day ago",
    thumbnail: profile,
  },
  
  
   
   
];

export default function LatestUpdates() {
  return (
    <div className="w-full sm:max-w-full md:max-w-[480px] lg:max-w-[500px] max-h-[362px]">
  <div className="latest-updates-container bg-white rounded-lg border border-gray-200 p-4 h-full w-full overflow-y-auto shadow-sm">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Latest Updates</h2>
    <div className="space-y-4">
      {updates.map((update) => (
        <div key={update.id} className="flex items-start gap-3 border-b pb-3">
          <img
            src={update.thumbnail}
            alt={update.title}
            className="w-12 h-12 min-w-[3rem] rounded object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">{update.title}</p>
            <p className="text-sm text-gray-600">{update.message}</p>
            <p className="text-xs text-gray-400">{update.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
