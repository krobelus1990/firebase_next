import { ImageComponent } from "@/components/elements/imagecomponent";
import { Deletebtn } from "@/components/elements/deletebutton";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { userdetailProps } from "@/types/userdetail";
import getUser from "@/firebase/getUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";


export const UserDetail:React.FC<userdetailProps> = ({userId} : {userId:string}) => {

  const router = useRouter()
  const [ data, setData ] = useState<any>([])
  const [ createdTime, setCreatedTime ] = useState<any>([])
  const back = () => {
      router.back()
  }

  useEffect(()=> {
    fetchData()
},[])

  const fetchData = async() => {
    const val:any = await getUser(userId)
    const date = new Date(val.created_time.seconds*1000);
    setData(val)
    const k = date.toLocaleDateString('ja-JP')
    setCreatedTime(k)
  }

  

  return (
    <>
      <div className="px-5 pt-[30px] gap-[30px] flex flex-col bg-background w-[1120px]">
        <div className="w-12 h-12 rounded-[30px] bg-primary flex cursor-pointer" onClick={() => back()}>
          <IoIosArrowBack className="m-auto items-center"/>
        </div>
        <div className="flex flex-col gap-5 bg-white p-8">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-4">
              <div>
                <ImageComponent
                  src={data?.photo_url || `../person_no_image.png`}
                  alt={"userIcon"}
                  className=" rounded-[65px] w-[65px] h-[65px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-[10px] items-center">
                  <span className="text-[26px] font-bold">
                    {data?.display_name || `なし`}
                  </span>
                  <div className="w-16 h-[26px] border-primary border-[1px] text-primary items-center flex justify-center rounded-[30px] text-[10px] px-2">
                    <span>ガンプラ</span>
                  </div>
                </div>
                <div className="flex gap-2 m-0 items-center">
                  <div className="w-2.5 h-2.5 rounded-xl bg-gray"></div>
                  <span>{createdTime}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-[244px] h-11 rounded-[30px] border-[1px] border-error text-error justify-center flex items-center">
                <span className="text-sm">ユーザーを凍結する</span>
              </div>
              <div>
                <Deletebtn />
              </div>
            </div>
          </div>
          <div className="text-sm text-main"></div>
          <div className="flex flex-col gap-3 text-sm [&>div]:border-b-[1px] [&>div]:border-background [&>div]:pb-3 ">
            <div className="flex gap-5 items-center">
              <span className="w-40">投稿</span>
              <div className="w-[178px] h-8 rounded-[30px] bg-primary text-white text-[11px] flex items-center justify-center">
                <span className="font-bold">このユーザーの他の投稿を見る</span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <span className="w-40">ID</span>
              <span className="font-bold">{data.uid}</span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="w-40">電話番号</span>
              <span className="font-bold">
                {data.phone_number ? data.phone_number : `なし`}
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="w-40">メールアドレス</span>
              <span className="font-bold">{data.email}</span>
            </div>
            <div className="flex gap-5 items-center">
              <span className="w-40">国籍</span>
              <span className="font-bold">日本</span>
            </div>
            <div className="flex gap-5 items-start">
              <span className="w-40 mr-2">プロフィール</span>
              <span className="font-bold w-[888px]">
                {data.profile ? data.profile : `なし`}
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 w-[132px] h-11 rounded-[30px] border-primary border-[1px] justify-center items-center m-auto mb-8 cursor-pointer"
          onClick={() => {
            back();
          }}
        >
          <IoReturnDownBackOutline color={"0071DA"} size={16} />
          <span className="text-primary font-bold">一覧へ戻る</span>
        </div>
      </div>
    </>
  );
};
