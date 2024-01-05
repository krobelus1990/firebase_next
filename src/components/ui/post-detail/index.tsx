import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

import { postDetailProps } from "@/types/post";
import { Postcomment } from "./postcomment";
import Postdetailitem from "./postdetail";


export const PostDetail: React.FC<postDetailProps> = ({selectedPost} : { selectedPost: any }) => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
 
 

  return (
    <>
      <div className="px-5 pt-[30px] gap-[30px] flex flex-col bg-background w-[1120px]">
        <div
          className="w-12 h-12 rounded-[30px] bg-primary flex cursor-pointer"
          onClick={() => back()}
        >
          <IoIosArrowBack className="m-auto items-center" />
        </div>
        <div><Postdetailitem selectedPost={selectedPost}/></div>
        <div><Postcomment /></div>
      </div>
    </>
  );
};
