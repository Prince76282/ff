import { useState, useEffect, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NftCards from "./NftCard";

import useApiHandler from "@/hooks/useApiCall";
import axios from "axios";
import { axiosInstance } from "@/lib/axiosInstance";

const BookSection = ({ title, books }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(2);
 
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBooksPerPage(4); 
      } else if (width >= 640) {
        setBooksPerPage(2); 
      } else {
        setBooksPerPage(1); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextBooks = () => {
    if (startIndex + booksPerPage < books?.length) {
      setDirection(1);
      setStartIndex((prev) => prev + booksPerPage);
    }
  };

  const prevBooks = () => {
    if (startIndex - booksPerPage >= 0) {
      setDirection(-1);
      setStartIndex((prev) => prev - booksPerPage);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-full  shadow-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevBooks}
            disabled={startIndex === 0}
            className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            {"<"}
          </button>
          <button
            onClick={nextBooks}
            disabled={startIndex + booksPerPage >= books.length}
            className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {
              books?.length>0 ?(
                books?.slice(startIndex, startIndex + booksPerPage).map((book) => (
                  <NftCards key={book.id} book={book} />
                ))
              ):(
                <div className="text-center">
                  NO PRODUCTS FOUND
                </div>
              )
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const BookSections = () => {

  const apiCaller = useApiHandler()
  const [products,setProducts] = useState({
    trendingProducts:[],
    popularProducts:[],
    newProducts:[]
  })
  const fetchProductData= async ()=>{
    const url = `product/fetch-all-products`
   
    const res = await apiCaller(url,'GET')

    console.log(res)
    if(res.data.status_code===200||res.data.success){
      setProducts({...products,
        trendingProducts:res?.data?.data?.trending_products,
        newProducts:res?.data?.data?.new_products,
        popularProducts:res?.data?.data?.popular_today
      })
    }
  }
  
  useEffect(()=>{
   fetchProductData()
  },[])

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-4">
      <BookSection title="Top Trending" books={products.trendingProducts} />
      <BookSection title="Popular Today" books={products.popularProducts} />
      <BookSection title="Newly Launched" books={products?.newProducts} />
    </div>
  );
};

export default BookSections;
