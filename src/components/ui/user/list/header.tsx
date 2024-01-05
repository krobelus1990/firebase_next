export const Itemheader = () => {
  return (
    <div className="w-full h-[60px] bg-background flex gap-4 items-center border-b-[2px] border-gray pl-[22px]">
      <div className="w-15 h-4">
        <input type="checkbox" name="" id="" className="w-4 h-full" />
      </div>
      <div className="w-[168px] h-5">
        <span className="w-full">ユーザー名</span>
      </div>
      <div className="w-40 h-5">
        <span className="w-full">登録日</span>
      </div>
      <div className="w-[200px] h-5">
        <span className="w-full">ログインステータス</span>
      </div>
      <div className="w-40 h-5">
        <span className="w-full">アカウント状態</span>
      </div>
      <div className="w-[60px] h-5">
        <span className="w-full"></span>
      </div>
    </div>
  );
};
