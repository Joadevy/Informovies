import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavUserProfile = () => {
  return (
    <div className="w-7 h-7 relative rounded-full border-white border-2">
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={"/assets/image-avatar.png"}
              alt=""
              fill
              sizes="10vw"
            ></Image>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-semi-dark-blue">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className=" text-slate-400 bg-slate-400" />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator className=" text-slate-400 bg-slate-400" />
            <DropdownMenuItem>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavUserProfile;
