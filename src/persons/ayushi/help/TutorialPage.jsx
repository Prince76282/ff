import { useState } from "react";

function TutorialPage() {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setShowModal(false);
    setFeedback("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-3xl mt-2 ml-2 flex flex-col md:flex-row gap-6 ">
      <div className="flex-1 flex flex-col items-start gap-1">
        <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
        <img
          src="src\assets\Help&Support\cuate.svg"
          alt="Help illustration"
          className="w-full max-w-[350px] mx-auto md:mx-0"
        />
        <div className="grid sm:grid-cols-2 gap-4 w-full justify-items-center">
          <div className="border rounded-lg p-4 text-center w-45">
            <p className="text-sm text-gray-600">Email Us</p>
            <a
              href="mailto:support@filmyfunds.com"
              className="text-xs font-semibold text-gray-800 hover:underline block max-w-full"
            >
              support@filmyfunds.com
            </a>
          </div>
          <div className="border rounded-lg p-4 text-center w-45">
            <p className="text-sm text-gray-600">Call Us</p>
            <p className=" text-xs font-semibold text-gray-800 hover:underline">
              +91 1234567890
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {/* Video Tutorials */}
        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm border">
          <img
            src="src\assets\Help&Support\Tutorials.svg"
            alt="Video icon"
            className="w-25 h-24 shrink-0"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Video Tutorials</h3>
            <p className="text-sm text-gray-600 mb-2">
              Watch videos to get familiar with our Platform
            </p>
            <a
              href="https://youtu.be/RCv8cCymLYE?si=woUlt879AhNgKd0-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-teal-700 transition text-center"
            >
              Watch Videos
            </a>
          </div>
        </div>

        {/* Feedback & Suggest */}
        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm border">
          <img
            src="src\assets\Help&Support\Feedback.svg"
            alt="Feedback icon"
            className="w-23 h-26 shrink-0"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Feedback & Suggest</h3>
            <p className="text-sm text-gray-600 mb-2">
              Your input is valuable in helping us better understand your needs
              and improve our services.
            </p>
            <button
            onClick={() => setShowModal(true)}
              target="_blank"
              className="bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Send Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <img
                src="src\assets\Help&Support\close.svg"  
                alt="Close"
                className="w-6 h-6"  
              />
            </button>

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-4 text-teal-700">
              Filmy Feedback Form
            </h3>

            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="src\assets\Shreya_assets\profile.png" 
                alt="User Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">John Doe</p> 
              </div>
            </div>

            {/* Feedback Form */}
            <form onSubmit={handleSubmit}>
              <textarea
                rows="5"
                className="w-full border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Write your feedback or suggestion here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
              >
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TutorialPage;
