import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import NftCards from "../../prince/NftCard";
import { IoClose } from "react-icons/io5";

const SearchItems = ({ searcharray = [], onClose }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setBooksPerPage(5);
      } else if (width >= 1024) {
        setBooksPerPage(4);
      } else if (width >= 768) {
        setBooksPerPage(3);
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
    if (startIndex + booksPerPage < searcharray.length) {
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

  const visibleBooks = searcharray.slice(startIndex, startIndex + booksPerPage);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 py-6">
      <div className="bg-white dark:bg-gray-900 max-w-7xl w-full rounded-xl shadow-2xl p-6 relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center w-full">
            Search Results
          </h1>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full transition"
            aria-label="Close"
          >
            <IoClose size={20} />
          </button>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mb-5">
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Showing {startIndex + 1} -{" "}
            {Math.min(startIndex + booksPerPage, searcharray.length)} of{" "}
            {searcharray.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevBooks}
              disabled={startIndex === 0}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 disabled:opacity-40 transition"
            >
              {"<"}
            </button>
            <button
              onClick={nextBooks}
              disabled={startIndex + booksPerPage >= searcharray.length}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 disabled:opacity-40 transition"
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Animated Results */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ x: direction * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            >
              {visibleBooks.map((book) => (
                <NftCards key={book.product_id} book={book} onClose={onClose} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;