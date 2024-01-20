import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import SignOut from "../Buttons/Session/LogOut";
import SignIn from "../Buttons/Session/SignIn";
import Link from "next/link";

const NavUserProfile = async () => {
  const session = await getServerSession();

  return (
    <div className="w-7 h-7 relative rounded-full border-white border-2">
      <div className="">
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className="rounded-full"
                src={session.user?.image!}
                alt=""
                sizes="10vw"
              ></img>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-semi-dark-blue">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className=" text-slate-400 bg-slate-400" />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator className=" text-slate-400 bg-slate-400" />
              <DropdownMenuItem>
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={"/assets/avatar-placeholder.webp"}
                alt=""
                fill
                sizes="10vw"
              ></Image>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-semi-dark-blue">
              <DropdownMenuLabel>Informovies</DropdownMenuLabel>
              <DropdownMenuSeparator className=" text-slate-400 bg-slate-400" />
              <DropdownMenuItem>
                <Link href="/subscribe">Subscribe</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className=" text-slate-400 bg-slate-400" />
              <DropdownMenuItem>
                <SignIn />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default NavUserProfile;
