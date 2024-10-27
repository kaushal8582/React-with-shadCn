import { Button } from "../ui/button";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  return (

    <div className="w-full bg-[#a4a4a42a] p-2 flex items-center justify-between">
      <div className="w-full h-12    flex items-center justify-start gap-3 ">
        <div className="logo">
          <svg
            width="56"
            height="25"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="userName flex items-center justify-center gap-3">
          <div className="w-6 h-6 rounded-full bg-white"></div>
          <h2>Kaushal projects</h2>
          <Button className="p-1 ">Hobby</Button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <Button variant="outline" className=" bg-transparent ">
          FeadBack
        </Button>
        <a href="">Changelog</a>
        <a href="">Help</a>
        <a href="">Dox</a>
        <div className="w-7 h-7 rounded-full grid place-items-center border ">
          <IoIosNotifications />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="bg-white w-6 h-6 rounded-full"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black flex flex-col  justify-center gap-2  text-white w-[250px] m-4">
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem className="font-bold text-[#A1A1A1]">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold text-[#A1A1A1]">
              Account Setting
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold flex items-center justify-between text-[#A1A1A1]">
              Create Team <AiOutlinePlusCircle cla />
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className="font-bold text-[#A1A1A1]">
              Command Menu
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold text-[#A1A1A1]">
              Theme
            </DropdownMenuItem>

            <DropdownMenuSeparator/>
            <DropdownMenuItem className="font-bold text-[#A1A1A1]">
              Home Page
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold flex items-center justify-between text-[#A1A1A1]">
              LogOut <MdOutlineLogout />

            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <Button className="w-full bg-[#fff9f9] text-black p-2 " >Upgrade to Pro</Button>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Nav;
