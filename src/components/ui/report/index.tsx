import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Filter } from "@/components/elements/filter";
import { Title } from "@/components/elements/title";
import { Searchbtn } from "@/components/elements/searchbutton";
import { PostItem } from "./list";
import { postSearch } from "@/firebase/search";

type PostProps = {
  postList: string[];
  userProfiles: string[];

};

export const Report: React.FC<PostProps> = ({ postList, userProfiles }) => {
  const [ searchValue, setSerachValue ] = useState('')
  const [ inputedValue, setInputedValue ] = useState('')
  const [ postLists, setPostLists ] = useState<any[]>(postList)
  const [ postProfiles, setPostProfiles ] = useState<any[]>(userProfiles)
  


  useEffect(() => {
   
    const fetchData = async () => {
      if (searchValue) {
        const searchedPostList: any = await postSearch(searchValue);
        setPostLists(searchedPostList.searchedPostList);
        setPostProfiles(searchedPostList.searchedUsers);
      } else {
        setPostLists(postList);
        setPostProfiles(userProfiles);
      }
      
    };
  
    fetchData();
  }, [searchValue, postList, userProfiles]);
  

  const inputValue = (e: any) => {
    setInputedValue(e.target.value);
  };

  const search = async () => {
    setSerachValue(inputedValue)
  }

  return (
    <div className="px-5 pt-[30px] pb-0 bg-background shadow-md">
      <div>
        <Title value="投稿一覧" />
      </div>
      <div className="flex flex-row gap-4 py-4">
        <div>
          <Filter filter={"総合投稿数"} value={2343} />
        </div>
      </div>
      <div className="flex flex-col bg-white gap-7">
        <div className="flex gap-3 items-center pr-5 justify-end pt-5">
          <div className="w-[350px] h-11 border-separator border-[1px] rounded-md flex justify-between px-3 items-center">
            <span className="font-normal text-sm text-main">並べ替え</span>
            <span>
              <FaAngleDown />
            </span>
          </div>
          <div className="flex gap-3">
            <div className="w-[350px] h-[50px] relative">
              <input
                type="text"
                className="bg-background w-full h-full pl-10"
                placeholder="検索"
                onChange={(e) => inputValue(e)}
              />
              <span className="absolute top-[13px] left-[10px]">
                <CiSearch size={24} color={"#7E7E7E"} />
              </span>
            </div>
            <div onClick={() => search()} className="cursor-pointer">
              <Searchbtn />
            </div>
          </div>
        </div>
        <div>
          <PostItem postList={postLists} userProfiles={postProfiles} />
        </div>
      </div>
    </div>
  );
};
