import React, { useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';

const MkPieChart = () => {
  const totalInvestment = 500000;
  const chartRef = useRef(null);

  const data = [
    { name: 'Gold', value: 25, color: '#b8e986', investment: totalInvestment * 0.25 },
    { name: 'Diamond', value: 25, color: '#4db380', investment: totalInvestment * 0.25 },
    { name: 'Pro', value: 50, color: '#1e8a3e', investment: totalInvestment * 0.5 }
  ];

  return (
    <div 
      ref={chartRef} 
      className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto border relative overflow-hidden w-full"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-2xl font-bold">Funding Insights</h2>
        <div className="bg-gray-100 rounded-lg p-2 text-right">
          <p className="text-2xl font-bold">₹ 5,00,000</p>
          <p className="text-sm text-gray-600">Total Investment</p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative flex flex-col items-center w-full">
        <div className="w-full h-[350px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius="60%"
                innerRadius="40%"
                fill="#8884d8"
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  content={(props) => (
                    <g style={{ pointerEvents: 'none' }}> 
                      <text 
                        x={props.viewBox.cx} 
                        y={props.viewBox.cy - 10} 
                        textAnchor="middle" 
                        dominantBaseline="central" 
                        className="text-base font-medium" 
                        fill="#4a5568"
                      >
                        Total Investors
                      </text>
                      <text 
                        x={props.viewBox.cx} 
                        y={props.viewBox.cy + 20} 
                        textAnchor="middle" 
                        dominantBaseline="central" 
                        className="text-2xl font-bold" 
                        fill="#1a202c"
                      >
                        2500
                      </text>
                    </g>
                  )}
                  position="center"
                />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Investor Labels - Shown on Larger Screens */}
<div className="hidden sm:block">
  <div className="absolute left-[8%] top-[55%] transform -translate-x-1/2 -translate-y-1/2">
    <p className="text-sm text-gray-600">Pro Investors</p>
    <p className="text-xl font-bold text-black">1000</p>
  </div>

  <div className="absolute right-[8%] top-[20%] transform -translate-x-1/2 -translate-y-1/2">
    <p className="text-sm text-gray-600">Gold Investors</p>
    <p className="text-xl font-bold text-black">250</p>
  </div>

  <div className="absolute right-[6%] bottom-[10%] transform -translate-x-1/2 -translate-y-1/2">
    <p className="text-sm text-gray-600">Diamond Investors</p>
    <p className="text-xl font-bold text-black">1250</p>
  </div>
</div>

{/* Investor Labels - Move Below Chart on Small Screens */}
<div className="sm:hidden flex flex-col items-center mt-4 gap-4">
  <div className="flex justify-between w-full px-4">
    <div className="text-center bg-gray-200 rounded-lg p-2 shadow">
      <p className="text-sm text-gray-800">Pro Investors</p>
      <p className="text-xl font-bold text-black">1000</p>
    </div>
    <div className="text-center bg-gray-200 rounded-lg p-2 shadow">
      <p className="text-sm text-gray-800">Gold Investors</p>
      <p className="text-xl font-bold text-black">250</p>
    </div>
    <div className="text-center bg-gray-200 rounded-lg p-2 shadow">
      <p className="text-sm text-gray-800">Diamond Investors</p>
      <p className="text-xl font-bold text-black">1250</p>
    </div>
  </div>
</div>


        {/* Legend - Moves to the bottom on small screens */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: '#1e8a3e' }}></div>
            <span>Pro (50%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: '#b8e986' }}></div>
            <span>Gold (25%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: '#4db380' }}></div>
            <span>Diamond (25%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MkPieChart;
