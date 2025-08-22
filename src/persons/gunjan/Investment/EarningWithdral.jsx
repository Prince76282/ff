
import React, { useState, useMemo } from "react";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";

import datanew from "../../../data/datanew.json";


const EarningWithdral = () => {
  const [showAll, setShowAll] = useState(false);
  // Define columns for the table
  const columns = [
    {
      accessorKey: "payoutdate",
      header: "PAYOUT DATE",
      cell: (info) => <span className="py-2 text-[14px]">{info.getValue()}</span>,
    },
   
    {
  accessorKey: "amount",
  header: () => (
    <div >
      <span className="block sm:inline">AMOUNT</span>
      <span className="block sm:inline"> RECEIVED</span>
    </div>
  ),
  cell: (info) => (
    <span className="py-2 text-[14px] ">₹{info.getValue()}</span>
  ),
},

    
    {
      accessorKey: "status",
      header: "STATUS",
      cell: (info) => (
        <button className="bg-teal-600 text-[10px] text-white px-2 py-1.5 rounded hover:bg-teal-700">
          {info.getValue()}
        </button>
      ),
    },
  ];

  // Show only 5 rows initially (change to 12 if needed)
 const displayedData = useMemo(() => {
  return showAll ? datanew : datanew.slice(0, 5);
}, [showAll]);


  // Create the table instance
  const table = useReactTable({
    data: displayedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white w-full max-w-[720px] lg:max-w-[860px]  h-auto border border-gray-200 rounded-lg  overflow-hidden">
  <p className="lg:text-xl md:text-lg text-sm font-semibold mb-4 pl-4  lg:pl-10  mt-3">
    Earnings & Withdrawals
  </p>

  <div className="w-full px-4 lg:px-10">
    {/* Horizontal scroll container for small screens */}
    <div className="w-full overflow-x-auto sm:overflow-x-visible">
      {/* Inner wrapper to maintain min-width */}
      <div
        className={`${
          datanew.length > 6 ? "max-h-[250px] overflow-y-auto" : ""
        } min-w-[100px] lg:min-w-[600px] sm:min-w-[100px] md:min-w-[500px]`}
      >
        <table className="w-full border-collapse border border-black">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="text-left bg-teal-50">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-1 px-3 font-medium border border-black text-[12px] md:text-[14px] whitespace-nowrap"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-black">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-2 px-3 border border-black text-[12px] md:text-[14px] whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Show All / Show Less Buttons */}
    {datanew.length > 5 && !showAll && (
      <div className="text-center mt-4">
        <div className="inline-block bg-gradient-to-r from-[#9DD4C6] to-[#FFE655] p-[2px] rounded">
          <button
            className="bg-white text-black px-3 py-2 w-[130px] h-[36px] rounded-[8px] hover:bg-gradient-to-r from-[#FFE655] to-[#9DD4C6] flex items-center justify-center gap-2 whitespace-nowrap"
            onClick={() => setShowAll(true)}
          >
            <span>Show All</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#0C8281" />
              <path d="M10 8l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    )}

    {datanew.length > 5 && showAll && (
      <div className="text-center mt-4">
        <div className="inline-block bg-gradient-to-r from-[#FFE655] to-[#9DD4C6] p-[2px] rounded">
          <button
            className="bg-white text-black px-3 py-2 w-[130px] h-[36px] rounded-[8px] hover:bg-gradient-to-r from-[#FFE655] to-[#9DD4C6] flex items-center justify-center gap-2 whitespace-nowrap"
            onClick={() => setShowAll(false)}
          >
            <span>Show Less</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#0C8281" />
              <path d="M14 16l-4-4 4-4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    )}
  </div>
</div>


  
  );
};

export default EarningWithdral;


