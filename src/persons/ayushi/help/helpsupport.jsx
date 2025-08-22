import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I invest in a film?",
    answer:
      "Investing in a film typically involves connecting with film producers, production companies, or investment platforms. You'll need to review the project's business plan, understand the risks involved, and ensure compliance with securities regulations. It's recommended to consult with entertainment lawyers and financial advisors before making any investment decisions.",
  },
  {
    question: "What are the risks of film investment?",
    answer:
      "Film investments carry significant risks including potential loss of capital, unpredictable market reception, distribution challenges, and long periods before potential returns. The entertainment industry is highly volatile and success is never guaranteed, even with established talent involved.",
  },
  {
    question: "What's the minimum investment amount?",
    answer:
      "Minimum investment amounts vary widely depending on the project and investment structure. They can range from a few thousand dollars in crowdfunding scenarios to millions for major studio productions. Each project typically sets its own minimum investment threshold.",
  },
  {
    question: "How long until I see returns?",
    answer:
      "The timeline for returns can be quite long in film investment. It typically takes 1-3 years from investment to potential returns, considering production time, post-production, distribution, and revenue collection. Some films may take even longer to generate returns.",
  },
  {
    question: "What documents should I review?",
    answer:
      "Key documents include the private placement memorandum (PPM), investment agreement, business plan, budget, distribution strategy, and any revenue projections. Having these reviewed by an entertainment lawyer is crucial before making any investment decisions.",
  },
];

function FAQ({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-2 border-[#9DD4C6] rounded-lg overflow-hidden mb-4">
      <button
        className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors gap-4"
        onClick={onClick}
      >
        <span className="text-base sm:text-lg font-medium text-gray-900 flex-1 pr-2">
          {question}
        </span>
        <div className="bg-[#00A896] rounded-full w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center transition-all duration-200 hover:bg-[#008073]">
          <ChevronDown
            className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 bg-gray-50">
          <p className="text-sm sm:text-base text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-3xl mt-2 ml-2 flex flex-col md:flex-row gap-6">
      <div className="flex-1 flex flex-col items-start gap-1">
        
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    
  );
}

export default App;
