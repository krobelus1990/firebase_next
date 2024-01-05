import React, { useState, useEffect } from "react";
import { Pagenation } from "@/components/elements/pagenation";
import { Item } from "./item";

type PostProps = {
  postList: any[];
  userProfiles: any[];
};

export const PostItem: React.FC<PostProps> = ({postList, userProfiles}) => {

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap w-[1120px] gap-3 px-5">
        {postList.map((post, index) => {
          const k = new Date(post.created_datetime.seconds * 1000);
          const created_time = k.toLocaleDateString("ja-JP");
          const userProfile = userProfiles.find(
            (profile) => profile?.uid === post.user_ref.id
          );

          return (
            <Item
              post_url={post.photo_urls[0]}
              title={post.title}
              created_time={created_time}
              userImage={userProfile?.photo_url || "../person_no_image.png"}
              userName={userProfile?.display_name || "なし"}
              id={post.created_datetime.seconds}
              key={index}
            />
          );
        })}
      </div>
      <div className="bg-background">
        <div className="flex justify-center bg-white">
          <Pagenation totalNumber={1} />
        </div>
      </div>
    </div>
  );
};
