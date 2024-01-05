import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { AiFillFlag } from "react-icons/ai";
import { LuMessageCircle } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { PiClipboardText } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { CiLogout } from "react-icons/ci";




export const Layout = () => {
  const router = useRouter();

  const menuItems = [
    {
      href: "/user-list",
      title: "ユーザー一覧",
      icon: <FaUserGroup size={24} />,
    },
    {
      href: "/post-list",
      title: "投稿一覧",
      icon: <BiSolidCategory size={24} />,
    },
    {
      href: "/report",
      title: "不適切なコンテンツ",
      icon: <AiFillFlag size={24} />,
    },
    {
      href: "/comment-list",
      title: "コメント一覧",
      icon: <LuMessageCircle size={24} />,
    },
    {
      href: "/notification-list",
      title: "お知らせ一覧",
      icon: <HiOutlineBellAlert size={24} />,
    },
    {
      href: "/info",
      title: "お役立ち情報",
      icon: <PiClipboardText size={24} />,
    },
    {
      href: "/setting",
      title: "テーマ設定",
      icon: <MdOutlineSettings size={24} />,
    },
  ];

  return (
    <div className="flex flex-col text-sm border-l-[1px] border-gray">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-white w-full pl-10 pt-5 md:w-60 pr-0">
          <Link href="/" className=" text-[30px] ">
            Admin panel
          </Link>
          <div className="flex flex-col gap-[300px]">
            <nav>
              <ul>
                {menuItems.map(({ href, title, icon }) => (
                  <li className="mx-2 my-6" key={title}>
                    <Link
                      href={href}
                      className={`flex p-2 rounded hover:bg-background cursor-pointer ${
                        router.asPath === href && "bg-background text-black"
                      }`}
                    >
                      <div className="flex gap-2 items-center">
                        {icon}
                        {title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <footer>
              <div className="flex gap-2 items-center mx-2">
                <CiLogout size={20} />
                <span>ログアウト</span>
              </div>
            </footer>
          </div>
        </aside>
      </div>
    </div>
  );
};
