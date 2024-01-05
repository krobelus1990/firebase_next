import { Pagenation } from "@/components/elements/pagenation";
import { Itemheader } from "./header";
import { Item } from "./item";
import { props } from "@/types/userlist";





const Useritem: React.FC<props> = ({ users } : {users: any[]}) =>{

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[1120px] gap-2 px-4">
        <Itemheader />
        {
          users.map((user: any, index: number) => {
             const k = new Date(user.created_time.seconds * 1000);
             const created_time = k.toLocaleDateString("ja-JP");
            return (
              <Item key={index} userName={user.display_name} created_time={created_time} uid={user.uid} photo_url={user.photo_url} />
              )
            })
          }
      </div>
      <div className="bg-background">
        <div className="flex justify-center">
          <Pagenation totalNumber={users.length} />
        </div>
      </div>
    </div>
  );
};

export default Useritem
