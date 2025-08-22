

import { useState, useEffect } from "react";

import Cartitems from "./CartItems";
import { useNavigate } from "react-router-dom";
import useApiHandler from "@/hooks/useApiCall";

const CartPage = () => {
  

  const [checkout,setCheckout]=useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [updatedCart, setUpdatedCart] = useState([]);
  const apicaller = useApiHandler();

 useEffect(() => {
  const fetchCartItems = async () => {
    try {
      const response = await apicaller("/user/cart/get_cart_by_user", "GET");
      if (response?.data?.success) {
        const cartItems = response.data.data || [];
        setCart(cartItems);

        // Now fetch checkout details
        fetchCheckoutDetails();
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const fetchCheckoutDetails = async () => {
    try {
      const checkoutDetails = await apicaller("/user/cart/checkout", "GET");
      console.log("Checkout items:", checkoutDetails?.data?.data?.products);
      setCheckout(checkoutDetails?.data?.data?.products || []);
    } catch (error) {
      console.log("Error occurred while fetching checkout details:", error);
    }
  };

  fetchCartItems();
}, []);

  // *******************************fetching checkut details***********************

  












  const navigate = useNavigate();
  const tax = 40;
  const userId = 2; // Set this dynamically if needed
  const cartId = 8; // Set this dynamically if needed

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const tierPricing = {
    PRO: 250,
    GOLD: 400,
    DIAMOND: 600,
  };



  const [totalAmountFromAPI, setTotalAmountFromAPI] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // const updateCartItem = (id, tier, delta) => {
  //   const updatedCart = cartItems.map((item) => {
  //     if (item.product_id=== id) {
  //       const currentQty = item.quantities[tier] || 0;
  //       const newQty = Math.max(currentQty + delta, 0);
  //       return {
  //         ...item,
  //         quantities: {
  //           ...item.quantities,
  //           [tier]: newQty,
  //         },
  //       };
  //     }
  //     return item;
  //   });

  //   setCartItems(updatedCart);
  //   console.log("🛒 Updated Cart State:");
  //   console.table(updatedCart);
  // };

  const removeCartItem = async (productId, cartid) => {
    const updatedCart = cart.filter((item) => item.product_id !== productId);
    // ************************************************* need to verify api****************************************************
    // try{
    //   const deletitem=  await apicaller(`/user/cart/delete_product_from_cart?${cartid}`,"PUT");
    //   // want to check if delete api is working or not

    // }
    // catch(e)
    // {

    // }
    setCart(updatedCart);

    console.log("🗑️ Removed item from frontend:", productId);
  };


  // const selectTier = (id, tier) => {
  //   const selected = tier.toUpperCase();
  //   const updated = cartItems.map((item) =>
  //     item.id === id ? { ...item, selectedTier: selected } : item
  //   );
  //   setCartItems(updated);
  //   console.log(`🎯 Tier changed for ${id}: ${selected}`);
  // };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  // Calculate and log total amount
  // useEffect(() => {
  //   const calculateTotalAmount = () => {
  //     let total = 0;
  //     cartItems.forEach((item) => {
  //       Object.entries(item.quantities).forEach(([tier, qty]) => {
  //         if (qty > 0) {
  //           total += tierPricing[tier] * qty;
  //         }
  //       });
  //     });
  //     return total + tax; // Adding tax
  //   };

  //   const totalAmount = calculateTotalAmount();
  //   setTotalAmountFromAPI(totalAmount);

  //   // Log the total amount to the console
  //   console.log(" Total Amount (with tax):", formatCurrency(totalAmount));
  // }, [cartItems, tax]);

  // Send total amount to the server
  // useEffect(() => {
  //   const sendTotalAmountToServer = async () => {
  //     try {
  //       const response = await axios.post(
  //         `${BASE_URL}/user/cart/update-total-amount`,
  //         {
  //           userId,
  //           totalAmount: totalAmountFromAPI,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log("✅ Total amount updated on server:", response.data);
  //     } catch (error) {
  //       console.error(
  //         "❌ Error sending total amount to server:",
  //         error.response?.data?.message || error.message
  //       );
  //     }
  //   };

  //   //  send if total amount is calculated
  //   if (totalAmountFromAPI > 0) {
  //     sendTotalAmountToServer();
  //   }
  // }, [totalAmountFromAPI]); // Trigger when totalAmountFromAPI changes

  //  to send POST request when cart item is updated
  // useEffect(() => {
  //   const updateQuantityOnServer = async () => {
  //     const updatedItems = cartItems.filter((item) =>
  //       Object.entries(item.quantities).some(([qty]) => qty > 0)
  //     );

  //     for (let item of updatedItems) {
  //       for (let [tier, qty] of Object.entries(item.quantities)) {
  //         if (qty > 0) {
  //           try {
  //             const response = await axios.post(
  //               `${BASE_URL}/user/cart/update-product-quantity`,
  //               {
  //                 productId: item.id,
  //                 tier,
  //                 quantityDelta: qty,
  //               },
  //               {
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                 },
  //               }
  //             );
  //             console.log("✅ Quantity updated on server:", response.data);
  //           } catch (error) {
  //             console.error(
  //               "❌ Error updating quantity:",
  //               error.response?.data?.message || error.message
  //             );
  //           }
  //         }
  //       }
  //     }
  //   };

  //   //  function when cartItems change
  //   if (cartItems.length > 0) {
  //     updateQuantityOnServer();
  //   }
  // }, [cartItems]); // Trigger when cartItems change

  return (
    <div className="flex w-full flex-col lg:flex-row gap-5 m-4 min-h-screen bg-gray-50">
      {/* Cart Items Section */}
      <div className=" flex  flex-col bg-white rounded-lg shadow-md p-5 w-full lg:w-2/3">
        <div className="flex  justify-between items-center mb-2">
          <h2 className="text-xl font-semibold mb-5">Cart</h2>
          <button
            className="bg-[#0C8281] px-6 rounded-sm py-2 text-white text-sm"
            onClick={() => navigate("/Booksection")}
          >
            Explore
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <Cartitems
              key={index}
              productid={item.product_id}
              nftcardid={item.product_id}
              cartid={item.cart_id}
              goldcardvalue={item.gold_card_value}
              diamondcardvalue={item.diamond_card_value}
              procardvalue={item.pro_card_value}
              diamondquantity={item.no_of_diamond_card}
              goldquantity={item.no_of_gold_card}
              proquantity={item.no_of_pro_card}
              userId={item.user_id}
              onDelete={removeCartItem}
            />
          ))
        )}
      </div>

      {/* Summary Section */}
     {/* Summary Section */}
<div className="bg-white flex flex-col gap-2 rounded-lg shadow-md p-5 w-full lg:w-1/3">
  <h1 className="text-xl font-semibold">Summary</h1>
<div className="flex flex-col gap-1.5">
  {checkout.length === 0 ? (
    <p className="text-gray-500 text-center">No items in checkout</p>
  ) : (
    checkout.map((item, key) => {
      const hasPro = item.pro?.count > 0;
      const hasGold = item.gold?.count > 0;
      const hasDiamond = item.diamond?.count > 0;
      const hasAnyCard = hasPro || hasGold || hasDiamond;

      return (
        <div key={key} className="flex flex-col gap-2 text-gray-700">
          {hasPro && (
            <div className="flex justify-between">
              <p>PRO</p>
              <p>
                ₹{item.pro.value} x {item.pro.count} = ₹{item.pro.total}
              </p>
            </div>
          )}
          {hasGold && (
            <div className="flex justify-between">
              <p>GOLD</p>
              <p>
                ₹{item.gold.value} x {item.gold.count} = ₹{item.gold.total}
              </p>
            </div>
          )}
          {hasDiamond && (
            <div className="flex justify-between">
              <p>DIAMOND</p>
              <p>
                ₹{item.diamond.value} x {item.diamond.count} = ₹{item.diamond.total}
              </p>
            </div>
          )}

          {!hasAnyCard && (
            <p className="text-center text-sm italic text-gray-400">No cards selected</p>
          )}

          <hr />
          <div className="flex justify-between font-semibold text-black">
            <p className="text-xl font-semibold">Subtotal</p>
            <p className="text-xl">₹{item.product_total}</p>
          </div>

         <button className="text-xl bg-teal-600 text-white mt-3.5 p-2.5 rounded-md hover:bg-amber-400 hover:text-black">Checkout</button>
          
          
        </div>
      );
    })
  )}
</div>

</div>

    </div>
  );

};

export default CartPage;
