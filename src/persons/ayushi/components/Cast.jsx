import React, { useState, useEffect, useRef } from "react";
import cast from "../../../assets/ayushi_assets/cast.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const castData = [
  { name: "Real Name", role: "Peter", image: cast },
  { name: "Reals Names", role: "Peter", image: cast },
  { name: "Real Name", role: "Peter", image: cast },
  { name: "Real Name", role: "Peter", image: cast },
  { name: "Real Name", role: "Peter", image: cast },
  { name: "Reals Names", role: "Peter", image: cast },
  { name: "Real Name", role: "Peter", image: cast },
  { name: "Real Name", role: "Peter", image: cast },
];

const writersData = [
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
  { name: "Real Name", role: "Story", image: cast },
];

const Cast = () => {
  const navigate= useNavigate();
  const castScrollRef = useRef(null);
  const writersScrollRef1 = useRef(null);
  const writersScrollRef2 = useRef(null);
  const [cardWidth, setCardWidth] = useState(250);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(180);
        setVisibleCards(1);
      } else if (width < 768) {
        setCardWidth(200);
        setVisibleCards(2);
      } else if (width < 1024) {
        setCardWidth(220);
        setVisibleCards(2);
      } else {
        setCardWidth(250);
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (ref, direction) => {
    const container = ref.current;
    if (container) {
      const scrollAmount = cardWidth * visibleCards * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const PersonCard = ({ person, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-[#E6F4F1] p-4 md:p-6 flex items-center space-x-3 md:space-x-4    shrink-0 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      <img
        src={person.image}
        alt={person.name}
        className="w-16 h-16 md:w-16 md:h-16 rounded-full object-cover"
      />
      <div>
        <p className="text-xs md:text-sm font-medium text-black">
          {person.name}
        </p>
        <p className="text-xs md:text-sm text-gray-600 font-semibold">
          {person.role}
        </p>
      </div>
    </motion.div>
  );

  const ScrollableSection = ({
    title,
    data,
    scrollRef,
    isLargeIcons = false,
  }) => {
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleScroll = () => {
      const container = scrollRef.current;
      if (container) {
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(
          container.scrollLeft <
            container.scrollWidth - container.clientWidth - 1
        );
      }
    };

    useEffect(() => {
      const container = scrollRef.current;
      if (container) {
        container.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => container.removeEventListener("scroll", handleScroll);
      }
    }, [data.length, cardWidth]);

    return (
      <div className="relative w-full  ">
        <h2 className="text-lg md:text-xl font-semibold text-[#0C8281] mb-2">
          {title}
        </h2>

        {showLeftButton && (
          <button
            className="absolute -left-[1]  top-1/2 -translate-y-1/5 z-10 bg-transparent shadow p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => scroll(scrollRef, "left")}
            aria-label={`Scroll ${title} left`}
          >
            {isLargeIcons ? (
              <MdChevronLeft size={28} className="text-[#0C8281]" />
            ) : (
              <ChevronLeft size={28} className="text-[#0C8281]" />
            )}
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap flex   scroll-smooth px-1 py-2 hide-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          <AnimatePresence>
            {data.map((person, idx) => (
              <PersonCard key={idx} person={person} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {showRightButton && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/5 z-10 bg-transparent shadow p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => scroll(scrollRef, "right")}
            aria-label={`Scroll ${title} right`}
          >
            {isLargeIcons ? (
              <MdChevronRight size={28} className="text-[#0C8281]" />
            ) : (
              <ChevronRight size={28} className="text-[#0C8281]" />
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="w-full lg:max-w-3xl md:max-w-96  mx-auto ">
      {/* Main Container Box */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-3 border border-gray-100">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8 cursor-pointer "
          onClick={()=>(navigate("/crew-details"))}
        >
          {/* Director Box */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg md:text-xl font-semibold text-[#0C8281] mb-3">
              Director
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#E6F4F1] p-3 md:p-4 rounded-lg flex items-center space-x-4 md:space-x-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={cast}
                alt="Director"
                className="w-12 h-12 md:w-16 md:h-20 rounded-full object-cover border-2 border-white"
              />
              <div>
                <p className="text-base md:text-lg font-medium text-black">
                  Real Name
                </p>
                <p className="text-sm md:text-md text-gray-600 font-semibold">
                  Director
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Top Cast Section */}
        <div className="mb-8">
          <ScrollableSection
            title="Top Cast"
            data={castData}
            scrollRef={castScrollRef}
            isLargeIcons={true}
          />
        </div>

        {/* Writers - Second Section */}
        <div className="mb-4">
          <ScrollableSection
            title="Writers"
            data={writersData}
            scrollRef={writersScrollRef2}
          />
        </div>
      </div>
    </div>
  );
};

export default Cast;