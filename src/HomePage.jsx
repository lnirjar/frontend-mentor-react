import { Link } from "react-router-dom"
import { challengesData } from "./main"

export const HomePage = () => {
  return (
    <div className="p-6">
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
  )
}
