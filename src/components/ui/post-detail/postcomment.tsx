import { ImageComponent } from "@/components/elements/imagecomponent";

export const Postcomment = () => {
  return (
    <div className="py-5">
      <div className="mb-6">
        <span className="font-bold text-heading text-lg">コメント一覧</span>
      </div>
      <div className="flex flex-col gap-5 bg-white p-7">
        <div className="w-full h-[60px] bg-background flex gap-4 items-center border-b-[2px] border-gray pl-[22px]">
          <div className="w-[168px] h-5">
            <span className="w-full">ユーザー名</span>
          </div>
          <div className="w-40 h-5">
            <span className="w-full">日時</span>
          </div>
          <div className="h-5">
            <span className="w-full">コメント</span>
          </div>
        </div>
        <div className="bg-white flex gap-4 w-full items-center h-[60px] border-b-[1px] border-gray pl-[22px]">
          <div className="w-[168px] h-5 flex gap-3 flex-row ">
            <div>
              <ImageComponent
                src={"../person_no_image.png"}
                alt={"usericon"}
                className=" rounded-[30px] w-7 h-7"
              />
            </div>
            <span>{`なし`}</span>
          </div>
          <div className="w-40 gap-1.5 flex flex-row items-center">
            <span>{`2023/01/21`}</span>
          </div>
          <div className="gap-1.5 flex flex-row items-center">
            <span>{`comment`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
