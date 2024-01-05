import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImageComponent } from "@/components/elements/imagecomponent";
import { userItem } from "@/types/userlist";
import Router from "next/router";
import deleteUser from "@/firebase/deleteUser";

export const Item: React.FC<userItem> = (users) => {
  const [IsChecked, setIsChecked] = useState<boolean>(false);

  const UserDetail = () => {
    Router.push(`/user-detail/${users.uid}`);
  };

  const Check = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const Remove = () => {
    IsChecked &&
      window.confirm("本当に削除しますか？") &&
      deleteUser(users.uid);
  };

  return (
    <div className="bg-white flex gap-4 w-full items-center h-[60px] border-b-[1px] border-gray pl-[22px]">
      <div className="w-15 h-4">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="w-4 h-full"
          onChange={(e) => Check(e)}
        />
      </div>
      <div className="w-[168px] h-5 flex gap-3 flex-row ">
        <div className="cursor-pointer" onClick={() => UserDetail()}>
          <ImageComponent
            src={users.photo_url ? users.photo_url : "./person_no_image.png"}
            alt={"usericon"}
            className=" rounded-[30px] w-7 h-7"
          />
        </div>
        <span>{users.userName ? users.userName : `なし`}</span>
      </div>
      <div className="w-40 h-5">
        <span>{users.created_time}</span>
      </div>
      <div className="w-[200px] gap-1.5 flex flex-row items-center">
        <div className="bg-gray w-2.5 h-2.5 rounded-xl"></div>
        <span>1日前にオンライン</span>
      </div>
      <div className="w-[384px]">
        <div className="w-[94px] h-[33px] border-primary border-[1px] flex flex-row gap-1.5 text-primary items-center rounded-[30px] text-[12px] px-2">
          <CiLock size={20} color={"#0071DA"} />
          <span>ロック中</span>
        </div>
      </div>
      <div className={`w-[60px] h-5 cursor-pointer`} onClick={() => Remove()}>
        <RiDeleteBin6Line size={24} color={"#7E7E7E"} />
      </div>
    </div>
  );
};
