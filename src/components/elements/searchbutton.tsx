import { CiSearch } from "react-icons/ci";

export const Searchbtn = () => {
  return (
    <div className="bg-primary rounded-[30px] w-[90px] h-11 flex justify-center items-center gap-[6px] hover:bg-neutral-500">
      <CiSearch size={20} color={"white"} />
      <span className="text-white text-sm font-bold">検索</span>
    </div>
  );
};
