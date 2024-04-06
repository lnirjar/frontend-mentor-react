import { Helmet } from "react-helmet";
import { FAQAccordion } from "./components/faqAccordion";
import desktopBackgroundImage from "./images/background-pattern-desktop.svg";
import starIcon from "./images/icon-star.svg";

export const FAQAccordionPage = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | FAQ accordion</title>
      </Helmet>
      {/* , backgroundColor: "hsl(275, 100%, 97%)" */}
      <div className={`min-h-screen bg-auto bg-no-repeat bg-top font-worksans text-base p-10`} style={{ backgroundImage: `url("/background-pattern-desktop.svg")` }}>
        <div className="bg-white px-10 py-8 rounded-xl shadow-xl max-w-[600px] mx-auto my-32">
          <div className="flex gap-4 items-center mt-2">
            <img src={starIcon} alt="" />
            <h2 className="text-6xl font-bold text-gray-900">FAQs</h2>
          </div>
          <div className="mt-8">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </>
  )
}
