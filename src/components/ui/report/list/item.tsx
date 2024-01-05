import Router from "next/router";
import { ImageComponent } from "@/components/elements/imagecomponent";
import { postItem } from "@/types/post";

export const Item:React.FC<postItem> = (post) => {
  const postDetail = () => {
    Router.push(`/post-detail/${post.id}`)
  }
  return (
    <div className="w-[206px] h-[354px] border-[2px] rounded-[8px] border-separator flex flex-col gap-2 p-3 cursor-pointer" onClick={() => postDetail()}>
      <div className="w-[182px] h-[182px]">
        <ImageComponent
          // src={post.photo_url}
          src="../person_no_image.png"
          alt={"postImage"}
          className="m-auto w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-[6px]">
          <div className="w-16 h-[26px] border-primary border-[1px] text-primary items-center flex justify-center rounded-[30px] text-[10px] px-2">
            <span>ガンプラ</span>
          </div>
          <div className="font-bold text-xs">
            <span>{post.title}</span>
          </div>
          <div className=" font-normal text-main">
            <span>{post.created_time}</span>
          </div>
        </div>
        <div className="flex gap-2 font-bold text-sm text-heading items-center">
          <ImageComponent
            src={post.userImage ? post.userImage:`../person_no_image.png`}
            alt={`profileImage`}
            className="rounded-[30px] w-[30px] h-[30px]"
          />
          <span>{post.userName}</span>
        </div>
      </div>
    </div>
  );
};
