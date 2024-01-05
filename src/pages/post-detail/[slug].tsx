import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Layout } from "@/components/layout/navbar";
import { PostDetail } from "@/components/ui/post-detail";
import getPostDocument from "@/firebase/getPostList";
import getPost from "@/firebase/getPost";

const Postdetail: NextPage = (): JSX.Element => {
  const router = useRouter();
  const postTime = router.query.slug as string;
  const [ selectedPost, setSelectedPost ] = useState();

  useEffect(() => {
    getId(postTime);
  }, []);

  const getId = async (e: string) => {

    const docRef = await getPostDocument();
    const postList: any[] = await Promise.all(docRef.map(getPost));
    setSelectedPost(postList.find(post=>post?.created_datetime.seconds === Number(e)))
  };

  return (
    <div className="flex flex-row gap-0 justify-center">
      <Layout />
      <div className="flex flex-col items-center h-screen bg-white pb-20">
        <PostDetail selectedPost={selectedPost} />
      </div>
    </div>
  );
};
export default Postdetail;
