import avatar from "../images/avatar-jessica.jpeg";

const links = [
  { name: "GitHub", url: "#" },
  { name: "Frontend Mentor", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" }
];
export const Card = () => {
  return (
    <div className="w-96 rounded-xl py-8 px-6 sm:px-10 sm:py-10 flex flex-col items-center text-sm bg-[hsl(0,0%,12%)]">
      <img src={avatar} alt="avatar" className="rounded-full w-24" />
      <h1 className="text-2xl font-bold mt-4 sm:mt-7 text-white">Jessica Randall</h1>
      <p className="text-[hsl(75,94%,57%)] mt-2 font-semibold">London, United Kingdom</p>
      <p className="mt-6 text-white">"Front-end developer and avid reader."</p>
      <ul className="w-full mt-7 flex flex-col gap-4">
        {
          links.map(link => <li key={link.name}><a href={link.url} className="p-3 text-center font-semibold text-white hover:text-[hsl(0,0%,12%)] rounded-lg bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] transition-colors block">{link.name}</a></li>)
        }
      </ul>
    </div>
  )
}
