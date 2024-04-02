import { Link } from "react-router-dom"
import { challengesData } from "./main"
import { Helmet } from "react-helmet"

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | React</title>
      </Helmet>
      <div className="p-6 bg-neutral-200 min-h-screen">
        <h1 className="text-4xl font-bold">Frontend Mentor Challenges</h1>
        <ul className="text-2xl mt-4">
          {
            challengesData.map(challenge => (
              <li key={challenge.path} className="hover:underline">
                <Link to={challenge.path}>
                  {challenge.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
