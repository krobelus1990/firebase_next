import { MdOutlineDelete } from "react-icons/md";

export const Deletebtn = () => {
  return (
    <div className="bg-primary rounded-[30px] w-[90px] h-11 flex justify-center items-center gap-[6px] hover:bg-graycursor-pointer text-white">
      <MdOutlineDelete size={20} color={"white"} />
      <span className=" text-sm font-bold ">削除</span>
    </div>
  );
};
