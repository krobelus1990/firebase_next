import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import getUserDocument from "@/firebase/getUserlist";
import User from "@/components/ui/user";
import getUser from "@/firebase/getUser";
import { Layout } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    <div className="flex flex-row justify-center">
      <Layout />
      <div className="flex flex-col items-center h-screen bg-white pb-[84px] border-r-[1px] border-gray">
        <User users={userList} />
      </div>
    </div>
  );
}
