import { MdDelete } from "react-icons/md";
import Nftcartpages from "./Cartnft";
import { useEffect, useRef, useState } from "react";
import useApiHandler from "@/hooks/useApiCall";
import { showErrorToast, showSuccessToast } from "@/lib/toastUtils";
import { data } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { Hand } from "lucide-react";

const Cartitems = ({
  productid,
  nftcardid,
  cartid,
  goldcardvalue,
  diamondcardvalue,
  procardvalue,
  diamondquantity,
  goldquantity,
  proquantity,
  userId,
  onDelete
}) => {
  const [nftcardDetails, setNftcardDetails] = useState("");
  const [selected, setSelected] = useState("PRO");
  const [goldQty, setGoldQty] = useState(goldquantity || 0);
  const [proQty, setProQty] = useState(proquantity || 0);
  const [diamondQty, setDiamondQty] = useState(diamondquantity || 0);
  const apicaller = useApiHandler();
 

// const [debounceTimers, setDebounceTimers] = useState({
//   PRO: null,
//   GOLD: null,
//   DIAMOND: null,
// });



  const HandleDelete = async () => {




  }

  // api call for getting nft card details
  useEffect(() => {
    const getnftDetails = async () => {
      try {
        const response = await apicaller(`/product/fetch-product-by-id?product_id=${nftcardid}`, "GET");

        if (response?.data?.success) {
          setNftcardDetails(response?.data?.data);
          // console.log("NFT Card Details:", response?.data?.data);
        }

      }
      catch (e) {
        console.error("Error fetching NFT card details:", e);

      }





    }

    getnftDetails();



  }, [nftcardid]);







 const CARD_TYPES = ["PRO", "GOLD", "DIAMOND"];

// Local state per card type
const [quantities, setQuantities] = useState({
  PRO: proquantity || 0,
  GOLD: goldquantity || 0,
  DIAMOND: diamondquantity || 0,
});

// Timer refs per card type
const updateTimers = useRef({
  PRO: null,
  GOLD: null,
  DIAMOND: null,
});

const updateCardQuantity = (type, newQty) => {
  setQuantities(prev => ({ ...prev, [type]: newQty }));

  // Clear previous timer
  if (updateTimers.current[type]) {
    clearTimeout(updateTimers.current[type]);
  }

  // Debounced API call
  updateTimers.current[type] = setTimeout(async () => {
    try {
      const endpoint =
        newQty > (quantities[type] || 0)
          ? `/user/cart/increment_${type.toLowerCase()}_card`
          : `/user/cart/decrement_${type.toLowerCase()}_card`;

      await apicaller(`${endpoint}?cart_id=${cartid}`, "PUT");
      console.log(`✅ Synced ${type} card quantity: ${newQty}`);
    } catch (error) {
      console.error(`❌ Error syncing ${type} quantity:`, error);
      // showErrorToast(`Failed to update ${type} card.`);
    }
  }, 600);
};

const handleIncrement = () => {
  if (!selected || !CARD_TYPES.includes(selected)) {
    showErrorToast("No Card Selected. Please Select one card");
    return;
  }

  updateCardQuantity(selected, quantities[selected] + 1);
};

const handleDecrement = () => {
  if (!selected || !CARD_TYPES.includes(selected)) {
    showErrorToast("No Card Selected. Please Select one card");
    return;
  }

  const currentQty = quantities[selected];
  if (currentQty === 0) return;

  updateCardQuantity(selected, currentQty - 1);
};


 const getSelectedQuantity = () => {
  return quantities[selected] || 0;
};

  return (
    <div className="w-full px-2 flex flex-col gap-10">
      <div className="flex lg:flex-row flex-col gap-6 justify-between w-full">
        <div className="lg:w-[40%] w-[70%]">
          <Nftcartpages height={200} bgcolor={"#000000"} cardetails={nftcardDetails} />
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between w-full gap-x-8">
            <div className="flex flex-col gap-2.5">
              <p className="font-bold text-xl">Killer Peter</p>
              <span className="text-gray-500 text-xl">#121</span>
            </div>
            {
              selected=="PRO" && (
                
                <p className="text-md font-semibold">₹{procardvalue}</p>
              )
           }
           {
            selected=="GOLD" && (
                <p className="text-md font-semibold">₹{goldcardvalue}</p>
              )
           }
           {
            selected=="DIAMOND" && (
                <p className="text-md font-semibold">₹{diamondcardvalue}</p>
              )
           }
          
          </div>

          {/* Tier Selection */}
          <div className="flex flex-row gap-4 mt-2">
            <div
              onClick={() => setSelected("PRO")}
              className={`${selected === "PRO"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
                } text-md rounded-lg cursor-pointer`}
            >
              <p className="px-5 py-1.5">PRO x {proQty}</p>
            </div>

            <div
              onClick={() => setSelected("GOLD")}
              className={`${selected === "GOLD"
                ? "metallic-gold-bg text-black"
                : "bg-gray-200 text-black"
                } text-md rounded-lg cursor-pointer`}
            >
              <p className="px-5 py-1.5">GOLD x {goldQty}</p>
            </div>

            <div
              onClick={() => setSelected("DIAMOND")}
              className={`${selected === "DIAMOND"
                ? "metallic-platinum text-black"
                : "bg-gray-200 text-black"
                } text-md rounded-lg cursor-pointer`}
            >
              <p className="px-5 py-1.5">DIAMOND x {diamondQty}</p>
            </div>
          </div>

          {/* Quantity Control Buttons */}

        <div className="flex justify-between items-center gap-3.5 text-xl lg:mt-32 mt-14">
  {/* Left: Increment, Count, Decrement */}
  <div className="flex flex-row items-center gap-3.5">
    <button
      onClick={handleIncrement}
      className="w-[32px] h-[32px] cursor-pointer flex items-center text-black justify-center rounded-full bg-gray-100"
    >
      +
    </button>

    <span className="min-w-[24px] text-center font-semibold">
      {getSelectedQuantity()}
    </span>

    <button
      onClick={handleDecrement}
      className="w-[32px] h-[32px] cursor-pointer flex items-center justify-center rounded-full bg-gray-100"
    >
      -
    </button>
  </div>

  {/* Right: Delete */}
  <div
  onClick={() => onDelete(productid,cartid)}
  
  className="flex items-end hover:bg-red-200 rounded-md p-2">
    <AiOutlineDelete  className="text-2xl text-red-600 cursor-pointer" />
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Cartitems;
