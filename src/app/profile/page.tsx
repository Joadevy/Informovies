import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {
  BookmarkHistoryInformation,
  RegisterDateInformation,
} from "./components/bookmarksProfileInfo";
import ProfileInfoCard from "./components/ProfileInfoCard";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  return (
    <div className="text-white gap-4 flex flex-col justify-center items-center min-h-screen pb-32">
      <header className="flex items-center flex-col gap-2">
        <h1 className="text-center text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Hey {session?.user?.name}, we&apos;re glad you&apos;re an Informovier!
        </h1>
      </header>

      <div>
        <div className="border border-grayish-blue p-3 rounded-md w-96 h-96 elative shadow-lg">
          <header className="mb-1 flex items-center justify-items-center flex-col">
            <div className="mt-3 flex flex-col gap-2 w-40 h-40 relative">
              <img
                className="rounded-full w-full bg-cover"
                src={session?.user?.image!}
                alt=""
                sizes="25vw"
              ></img>
            </div>
            <p className="italic text-slate-400">
              The picture of our favorite user 💜
            </p>
          </header>

          <Separator />

          <div className="mt-2 flex flex-col gap-2  justify-items-center">
            {/* <ProfileInfoCard
              title="Total bookmarks in your history"
              description="You have 0 bookmarks"
            />{" "} */}
            {/* @ts-ignore */}
            <BookmarkHistoryInformation userEmail={session?.user?.email} />
            {/* @ts-ignore */}
            <RegisterDateInformation userEmail={session?.user?.email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
