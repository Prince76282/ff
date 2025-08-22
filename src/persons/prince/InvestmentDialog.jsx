
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import img1 from "../../assets/srishti/checkdummy.png";

const steps = [
  {
    number: 1,
    title: "Funding Phase",
    description:
      "The project is in its funding stage. Once fully funded, production will begin.",
  },
  {
    number: 2,
    title: "Production Updates",
    description:
      "You'll receive exclusive behind-the-scenes updates & progress reports.",
  },
  {
    number: 3,
    title: "ROI Earnings",
    description:
      "Once the project starts streaming, you’ll start receiving payouts in your wallet.",
  },
];

const colorVariants = ["bg-[#E6F4F1]", "bg-[#CAEDE4]", "bg-[#9DD4C6]"];
const colornumber = ["bg-[#E6F4F1]", "bg-[#CAEDE4]", "bg-[#9DD4C6]"];

export default function InvestmentSuccessPage() {
  return (
    <div className="flex flex-col md:flex-row items-start p-6 justify-between gap-6   bg-white shadow-lg rounded-2xl max-w-6xl mx-auto border border-gray-200">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 flex bg-[#F3FFFc] flex-1 flex-col items-center md:items-start text-center md:text-left gap-4">
        <h2 className="text-3xl font-bold text-black">
          Congratulations, Jane Doe!
        </h2>

        <div className="flex flex-col items-center lg:items-center md:items-start">
          <div className="p-4 rounded-full w-fit">
            <img
              src={img1}
              alt="Success Icon"
              className="w-48 h-48 object-cover"
            />
          </div>

          <p className="text-gray-600 text-sm md:text-base  max-w-md">
            You are now an investor in <strong>‘Lout of Count’s Family’</strong>
            ! Watch your dashboard for updates and earnings.
          </p>

          <div className="flex flex-col sm:flex-col lg:flex-row gap-3 mt-4  justify-center w-full">
            {/* Dialog for Explore More */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="w-full px-8 rounded-sm border-black border-3 bg-[#0C8281] sm:w-auto"
                >
                 EXPLORE MORE
                </Button>
              </DialogTrigger>
              {/* <DialogContent className="max-w-md">
                <h4 className="text-lg font-semibold mb-2">
                  Explore More Projects
                </h4>
                <p className="text-sm text-gray-600">
                  Discover new and trending investment opportunities curated
                  just for you.
                </p>
                <Button className="mt-4">Go to Explore Page</Button>
              </DialogContent> */}
            </Dialog>

            <Button
              variant="outline"
              className="w-full border-3 rounded-sm border-[#0C8281] font-bold sm:w-auto"
            >
              TRACK INVESTMENT
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 mt-6 md:mt-0">
        <h3 className="text-3xl font-semibold text-gray-800">
          What happens next?
        </h3>

        {steps.map((step, index) => (
          <Card
            key={step.number}
            className={`relative ${
              colorVariants[index % colorVariants.length]
            } p-4 rounded-xl shadow-md`}
          >
            <div className="flex items-center flex-col text-center gap-2">
              <CardTitle className="text-gray-800 text-base md:text-lg">
                {step.title}
              </CardTitle>
              <CardContent className="text-sm text-gray-600 px-0">
                {step.description}
              </CardContent>
            </div>

            <div
              className={`w-10 h-10 absolute -top-4 left-4 md:left-8 rounded-full text-lg text-black flex items-center justify-center font-bold shadow-md ${
                colornumber[index % colornumber.length]
              }`}
            >
              {step.number}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
