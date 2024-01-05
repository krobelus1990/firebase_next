import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { Layout } from "@/components/layout/navbar";
import { Post } from "@/components/ui/post";
import getPostDocument from "@/firebase/getPostList";
import getPost from "@/firebase/getPost";
import getUser from "@/firebase/getUser";

const Postlist: NextPage = (): JSX.Element => {
  const [postList, setPostList] = useState<any[]>([]);
  const [userProfiles, setUserProfiles] = useState<any[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const List = await getPostDocument();

    const postDataList:any[] = await Promise.all(List.map((id) => getPost(id)));
    setPostList(postDataList);

    const userIds = postDataList.map((post) => post.user_ref.id);
    const profiles = await Promise.all(
      userIds.map((userId) => getUser(userId))
    );
    setUserProfiles(profiles);


  };

  return (
    <div className="flex flex-row gap-0 justify-center">
      <Layout />
      <div className="flex flex-col items-center h-screen bg-white pb-[84px]  border-r-[1px] border-gray">
        <Post postList={postList} userProfiles={userProfiles}/>
      </div>
    </div>
  );
};

export default Postlist;
