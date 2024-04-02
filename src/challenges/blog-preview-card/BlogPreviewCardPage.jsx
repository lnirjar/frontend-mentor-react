import { Helmet } from "react-helmet"
import { Card } from "./components/Card"

export const BlogPreviewCardPage = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Blog preview card</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen p-6 bg-[#F4D04E] font-figtree">
        <Card />
      </div>
    </>
  )
}
