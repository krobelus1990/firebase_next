import React, { useEffect, useState } from "react";
import { Deletebtn } from "@/components/elements/deletebutton";
import { Filter } from "@/components/elements/filter";
import { Searchbtn } from "@/components/elements/searchbutton";
import { Title } from "@/components/elements/title";
import { CiSearch } from "react-icons/ci";
import Useritem from "./list";
import { props } from "@/types/userlist";
import { userSearch } from "@/firebase/search";

const User: React.FC<props> = ({ users }: { users: any[] }) => {
  const [ searchValue, setSerachValue ] = useState('')
  const [ inputedValue, setInputedValue ] = useState('')
  const [ userList, setUserList ] = useState(users)


  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        const searchedUsers: any = await userSearch(searchValue);
        setUserList(searchedUsers);
      } else {
        setUserList(users);
      }
    };
  
    fetchData();
  }, [searchValue, users]);
  

  const inputValue = (e: any) => {
    setInputedValue(e.target.value);
  };

  const search = async () => {
    setSerachValue(inputedValue)
  }
  
  const multiDelete = async () => {};

  return (
    <div className="px-5 pt-[30px] pb-0 bg-background shadow-md">
      <div>
        <Title value="ユーザー一覧" />
      </div>
      <div className="flex flex-row gap-4 py-4">
        <div>
          <Filter filter={"総合ユーザー数"} value={6456} />
        </div>
        <div>
          <Filter filter={"テーマ1"} value={6325} />
        </div>
        <div>
          <Filter filter={"テーマ2"} value={458} />
        </div>
        <div>
          <Filter filter={"テーマ3"} value={1235} />
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between m-5">
          <div onClick={() => multiDelete()}>
            <Deletebtn />
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
        <div>{userList.length > 0 && <Useritem users={userList} />}</div>
      </div>
    </div>
  );
};

export default User;
