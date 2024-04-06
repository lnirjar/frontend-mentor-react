export const AccordionItem = ({ id, question, answer, open, setOpen }) => {

  const handleClick = (e) => {
    e.preventDefault();
    if (open) {
      setOpen("0");
    } else {
      setOpen(id);
    }
  }

  return (
    <div className="">
      <div
        onClick={handleClick}
        className="flex justify-between cursor-pointer"
      >
        <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
        <div className="w-6 h-6">
          <div className={`w-6 h-6 flex justify-center items-center rounded-full ${open ? `bg-[#301534]` : `bg-[#AD28EB]`} p-[6px]`}>
            <div className="w-full h-1 relative">
              <div className="w-full rounded-sm h-[3px] bg-white absolute top-0 left-0"></div>
              <div className={`w-full rounded-sm h-[3px] bg-white absolute top-0 left-0 transition-transform duration-200 ${open ? "" : "rotate-90"}`}></div>
            </div>
          </div>
        </div>
      </div>
      <p className={`${open ? '' : 'hidden'} mt-6 text-gray-600`}>{answer}</p>
    </div>
  )
}
