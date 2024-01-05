import getUserDocument from "@/firebase/getUserlist";
import type { NextPage } from "next";
import User from "@/components/ui/user";
import { Layout } from "@/components/layout/navbar";
import getUser from "@/firebase/getUser";
import { useEffect, useState } from "react";

const Userlist: NextPage = (): JSX.Element => {
  const [userList, setUserList] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const idList = await getUserDocument();

    const userDataList = await Promise.all(idList.map((id) => getUser(id)));
    setUserList(userDataList);
  };

  return (
    <div className="flex flex-row gap-0 justify-center">
      <Layout />
      <div className="flex flex-col items-center h-screen bg-white pb-[84px] border-r-[1px] border-gray">
        <User users={userList} />
      </div>
    </div>
  );
};

export default Userlist;
