import { useRouter } from "next/router";
import { Layout } from "@/components/layout/navbar";
import { UserDetail } from "@/components/ui/user-detail";

import type { NextPage } from "next";
import { useState } from "react";

const Userdetail : NextPage = () : JSX.Element => {
  const router = useRouter();
  const id= router.query.id as string;
  return (
    <div className="flex flex-row gap-0 justify-center">
      <Layout />
      <div className="flex flex-col items-center h-screen bg-white pb-[84px]">
        <UserDetail userId={id} />
      </div>
    </div>
  )
}
export default Userdetail