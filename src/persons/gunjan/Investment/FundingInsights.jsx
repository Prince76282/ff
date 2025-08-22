import { PieChart, Pie, Cell, Text, ResponsiveContainer } from "recharts";


const data = [
  { name: "Pro Investors", value: 1000 },
  { name: "Gold Investors", value: 250 },
  { name: "Diamond Investors", value: 1250 },
];

const COLORS = ["#21884A", "#BAE676", "#50B787"];
const total = data.reduce((sum, item) => sum + item.value, 0);

const percentageValuesForLegends = data.map((eachItem) => ({
  name: eachItem.name,
  value: ((eachItem.value / total) * 100).toFixed(1),
}));

const renderCustomLabel = ({ x, y, name, value }) => {
  return (
    <g>
      <Text
        x={x - 20}
        y={y - 5}
        textAnchor="middle"
        verticalAnchor="middle"
        fontFamily="Outfit"
        fontWeight="400"
        fontSize="14px"
        fill="#37474F"
      >
        {name}
      </Text>
      <Text
        x={x}
        y={y + 10}
        textAnchor="middle"
        verticalAnchor="middle"
        fontFamily="Outfit"
        fontWeight="600"
        fontSize="18px"
        fill="#000000"
      >
        {value}
      </Text>
    </g>
  );
};

const FundingInsights = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl lg:max-w-[860px] font-Poppins  mx-auto">
      <div className="flex flex-row justify-between items-center">
        <h2 className="mb-4 font-[500] font-bold text-[22px] leading-[100%] align-middle text-black font-Poppins">
          Funding Insights
        </h2>

        <div className="w-[143px] h-[49px] bg-[#eceff9] p-0 m-0 flex flex-col justify-center items-center rounded">
          <div className="w-[30px] h-[32px] flex items-center   flex-row justify-center">
            <img
              src="https://res.cloudinary.com/dio3xtbss/image/upload/v1747117112/INR-currency-symbol_nloxaf.png"
              alt="currency-symbol"
              className=" mr-0 w-[30px] h-[32px]"
            />
            <span className="mt-1 text-[22px] leading-[100%] font-medium text-center align-middle text-black -ml-[5px] font-Poppins">
              5,00,000
            </span>
          </div>
          <p className="ml-3 mb-1 text-[12px] leading-[100%] text-[#37474f] font-medium text-center align-middle font-Poppins">
            Total Investment
          </p>
        </div>
      </div>

      <div className="w-full flex items-center">
        <div className="relative w-[60%]">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
                labelRadius={100}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="flex justify-center items-center flex-col bg-[#eceff9] w-[128px] h-[128px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="font-outfit font-normal text-[14px] leading-[100%] text-center text-[#37474F] w-[76px] h-[40px] mb-[-7px]">
              Total Investors
            </p>

            {total}
          </div>
        </div>

        <div className="flex flex-col justify-center ml-8">
          {percentageValuesForLegends.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="font-[500] text-[16px] leading-[100%] align-middle text-[#37474f] font-[Outfit]">
                {entry.name}
              </span>
              <span className="font-[500] text-[16px] leading-[100%] align-middle text-[#37474f] font-[Outfit]">
                ({entry.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingInsights;
