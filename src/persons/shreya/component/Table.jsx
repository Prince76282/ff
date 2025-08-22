// ActiveInvestmentsTable.js
import React, { useState } from "react";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { ImDownload } from "react-icons/im";
import investmentDatatable from "../../../data/investmentDatatable.json";
import { useNavigate } from "react-router-dom";

const ActiveInvestmentsTable = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate=useNavigate();

  // Define columns for the table
  const columns = [
    {
      accessorKey: "projectName",
      header: "PROJECT NAME",
      cell: (info) => <span className="py-2 text-[14px]">{info.getValue()}</span>,
    },
    {
      accessorKey: "tier",
      header: "TIER",
      cell: (info) => <span className="py-2 text-[14px]">{info.getValue()}</span>,
    },
    {
      accessorKey: "investment",
      header: "INVESTMENT",
      cell: (info) => <span className="py-2 text-[14px]">{info.getValue()}</span>,
    },
    {
      accessorKey: "returns",
      header: "RETURNS",
      cell: (info) => <span className="py-2 text-[14px]">{info.getValue()}</span>,
    },
    {
      accessorKey: "status",
      header: "STATUS",
      cell: (info) => (
        <span className="py-2 text-green-600 text-[14px]">{info.getValue()}</span>
      ),
    },
    {
      accessorKey: "invoice",
      header: "INVOICE",
      cell: () => (
        <button className="flex items-center text-gray-600 hover:text-gray-900 text-[14px]">
          <ImDownload size={14} className="mr-2" />
          Download
        </button>
      ),
    },
    {
      accessorKey: "details",
      header: "DETAILS",
      cell: () => (
        <button className="bg-teal-600 text-[10px] text-white px-1 py-1 rounded hover:bg-teal-700 cursor-pointer"
        onClick={()=>(
          navigate("/inpro")
        )}
        
        >
          View Details
        </button>
      ),
    },
  ];

  // Show only 5 rows initially (change to 12 if needed)
  const displayedData = showAll ? investmentDatatable : investmentDatatable.slice(0, 5);

  // Create the table instance
  const table = useReactTable({
    data: displayedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    // Changed container: using full width and overflow-x-auto
    <div className="w-full overflow-x-auto">
      {/* Set a minimum width on the table so it remains scrollable on small screens */}
      <table className="min-w-[800px] w-full border-collapse border border-black">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-left bg-teal-50">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-1 px-3 font-medium border border-black text-[14px]"
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
                  className="py-2 px-3 border border-black text-[14px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* "See All" button */}
      {investmentDatatable.length > 5 && !showAll && (
        <div className="text-center mt-4">
 <div className="inline-block bg-gradient-to-r from-[#9DD4C6] to-[#FFE655] p-[2px] rounded">
  <button
    className="bg-white text-black p-2 w-[130px] h-[36px] rounded-[8px] hover:bg-gradient-to-r from-[#9DD4C6] to-[#FFE655] flex items-center justify-center gap-4" // Changed gap-2 to gap-4
    onClick={() => setShowAll(true)}
  >
    <span>See All</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#0C8281" />
      <path d="M10 8l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
</div>


        </div>
      )}
    </div>
  );
};

export default ActiveInvestmentsTable;
