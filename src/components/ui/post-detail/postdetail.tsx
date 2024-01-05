import { ImageComponent } from "@/components/elements/imagecomponent";
import { Deletebtn } from "@/components/elements/deletebutton";
import { MdFlag } from "react-icons/md";
import { LuAlertTriangle } from "react-icons/lu";
import { postDetailProps } from "@/types/post";
import { useState, useEffect } from "react";
import getUser from "@/firebase/getUser";



const Postdetailitem: React.FC<postDetailProps> = ({ selectedPost }) => {
  const [createdTime, setCreatedTime] = useState<string>('');
  const [posterInfo, setPosterInfo] = useState<any>('');

  useEffect(() => {
    fetchData();
  }, [selectedPost]);

  const fetchData = async () => {
    const date = new Date(selectedPost?.created_datetime.seconds * 1000)
    const k = date.toLocaleDateString('ja-JP')
    setCreatedTime(k)
    const store:any = await getUser(String(selectedPost?.user_ref.id));
    setPosterInfo(store)
    
  };

  return (

    <div className="flex flex-col gap-5 bg-white p-7">
      <div className="font-bold text-[30px]">
        <span>{selectedPost?.title}</span>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-2.5">
          <div className="w-[244px] h-11 rounded-[30px] border-[1px] border-error text-error justify-center flex items-center gap-2">
            <div>
              <MdFlag size={20} color={"#F5222D"} />
            </div>
            <span className="text-sm">不適切なコンテンツとして報告</span>
          </div>
          <div>
            <Deletebtn />
          </div>
        </div>
      </div>
      <div className="text-sm text-main"></div>
      <div className="flex flex-col gap-3 text-sm [&>div]:border-b-[1px] [&>div]:border-background [&>div]:pb-3 ">
        <div className="flex gap-6 items-center">
          <span className="w-40">通報</span>
          <div className="w-[130px] h-8 rounded-[30px] bg-waring border-yellow border-[1px] text-[10px] flex items-center justify-center gap-3">
            <div className="w-5 h-5 rounded-[30px] bg-yellow flex items-center justify-center">
              <LuAlertTriangle size={12} color={"#fff"} />
            </div>
            <span className="font-bold">通報が来ています</span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-40">投稿日</span>
          <span className="font-bold">{createdTime}</span>
        </div>
        <div className="flex gap-6">
          <span className="w-40">画像 / 動画</span>
          <div className="flex flex-wrap w-[828px] gap-1.5">
            {selectedPost?.photo_urls &&
            selectedPost?.photo_urls?.map((url: string) =>
              <ImageComponent
                // src={url?url:`../person_no_image.png`}
                src={`../person_no_image.png`}
                alt="PostMedia"
                className="w-40 h-40 rounded-sm"
              />
            )}
            {
              selectedPost?.video_url &&
              <video
                width="160"
                height="160"
                controls>
                <source
                  src={selectedPost?.video_url}
                />
              </video>
            }
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-40">詳細</span>
          <span className="font-bold w-[888px]">{selectedPost?.caption}</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-40">投稿ID</span>
          <span className="font-bold">{selectedPost?.id}</span>
        </div>
        <div className="flex gap-6 items-start">
          <span className="w-40">投稿者</span>
          <div className="flex gap-2 items-center justify-center">
            <ImageComponent
              src={posterInfo?.photo_url? posterInfo?.photo_url:"../person_no_image.png"}
              alt="poster"
              className="w-7 h-7 rounded-3xl"
            />
            <span className="font-bold">{posterInfo?.display_name}</span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-40">テーマタグ</span>
          <span className="font-bold border-primary border-[1px] text-primary px-3 py-[6px] rounded-[30px]">{`123456678`}</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-40">カテゴリ</span>
          <div className="flex gap-2">
          {selectedPost?.tags.map((tag:string) =>
            <span className="font-bold bg-primary text-white px-3 py-[6px] rounded-[30px]">{tag}</span>
          )
          }
          </div>
        </div>
        
        <div className="flex gap-6 items-center">
          <span className="w-40">タグ</span>
          <div className="font-normal border-background border-[1px] text-heading text-[10px] px-3 py-[6px] rounded-[30px]"><span># ライク</span></div>
        </div>
      </div>
    </div>
  );
}

export default Postdetailitem