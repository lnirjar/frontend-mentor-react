import { Helmet } from "react-helmet";
import { Card } from "./components/Card";

export const SocialLinksProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Social links profile</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen font-inter py-28 px-6 bg-[hsl(0,0%,8%)]">
        <Card />
      </div>
    </>
  )
}
