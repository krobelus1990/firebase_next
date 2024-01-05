import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

interface totalNumber {
  totalNumber: number;
}

export const Pagenation: React.FC<totalNumber> = (totalNumber) => {
  
  const totalPageNumber = Math.ceil(totalNumber.totalNumber / 8);
  const [onmouseover, setOnmouseover] = useState<boolean>(true);

  return totalPageNumber != 1 ? (
    <div className="flex gap-3 text-primary mt-[30px] m-auto mb-5">
      <div className="w-10 h-10 items-center flex justify-center rounded-[30px] border-separator border-[2px] hover:bg-primary hover:text-white cursor-pointer">
        <FaArrowLeft size={24} color={`${onmouseover && "white"}#0071DA`} />
      </div>
      <div className="w-10 h-10 items-center flex justify-center rounded-[30px] border-separator border-[2px] hover:bg-primary hover:text-white cursor-pointer">
        <span>1</span>
      </div>
      <div className="w-10 h-10 items-center flex justify-center rounded-[30px] border-separator border-[2px] hover:bg-primary hover:text-white cursor-pointer">
        <span>2</span>
      </div>
      <div className="w-10 h-10 items-center flex justify-center rounded-[30px] border-separator border-[2px] hover:bg-primary hover:text-white cursor-pointer">
        <span>3</span>
      </div>
      <div className="w-10 h-10 items-center flex justify-center rounded-[30px] border-separator border-[2px] hover:bg-primary hover:text-white cursor-pointer">
        <span>4</span>
      </div>
      <div className="w-10 h-10 items-center flex justify-center rounded-[30px] border-separator border-[2px] hover:bg-primary hover:text-white cursor-pointer">
        <FaArrowRight size={24} color={`${onmouseover && "white"}#0071DA`} />
      </div>
    </div>
  ) : (
    <div className="w-full h-8"></div>
  );
};
