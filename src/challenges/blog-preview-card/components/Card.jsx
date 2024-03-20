import illustrationImage from "../images/illustration-article.svg"
import avatarImage from "../images/image-avatar.webp"

export const Card = () => {
  return (
    <div className="max-w-96 bg-white p-6 rounded-[20px] border border-[#111111] text-[#111111] flex flex-col gap-6 shadow-[8px_8px] hover:shadow-[16px_16px] hover:-translate-x-1 hover:-translate-y-1 transition">
      <img src={illustrationImage} alt="illustration" className="rounded-[10px]" />
      <div className="flex flex-col gap-3">
        <div className="p-3 text-xs sm:text-sm font-extrabold bg-[#F4D04E] rounded-[4px] w-fit">Learning</div>
        <div className="text-xs sm:text-sm font-medium">Published 21 Dec 2023</div>
        <h3 className="text-xl sm:text-2xl font-extrabold hover:text-[#F4D04E] cursor-pointer">HTML & CSS foundations</h3>
        <p className="text-[#7F7F7F] text-sm sm:text-base font-medium">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={avatarImage} alt="avatar" className="w-8 h-8" />
        <div className="font-extrabold text-sm">Greg Hooper</div>
      </div>
    </div>
  )
}
