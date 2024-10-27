import Nav from "./components/common/Nav";
import { IoIosArrowDown } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscGithubProject } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const click = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-screen text-white bg-black">
      <Nav />
      <div className="w-full h-10 bg-[#a4a4a42a] ">
        <ul className="flex  items-center h-full p-3 pl-5 justify-start gap-4">
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Overview
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Integration
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Active
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Domain
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Usage
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Monitoring
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Storage
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            AI
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Support
          </li>
          <li className="text-[16px] hover:border-b-2 hover:cursor-pointer  text-[#A1A1A1] active:border-2 active:border-white active:text-white">
            Seting
          </li>
        </ul>
      </div>

      <div className="p-10">
        <div className="flex  justify-between">
          <Input
            type="text"
            placeholder="Search Repositories and Projects"
            className="placeholder:text-[16px] h-10 w-[70%]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className=" p-2 rounded-[10px] flex items-center border justify-between w-[13%]">
              sort by activity <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[13%] bg-black text-white font-bold">
              <DropdownMenuItem>sort by activity</DropdownMenuItem>
              <DropdownMenuItem>sort by name </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tabs defaultValue="account" className="">
            <TabsList className="bg-black border-2 h-full">
              <TabsTrigger onClick={click} value="account">
                {" "}
                <VscGithubProject />
              </TabsTrigger>
              <TabsTrigger onClick={click} value="password" className="">
                <TfiMenuAlt />
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <DropdownMenu>
            <DropdownMenuTrigger className=" p-2 rounded-[10px] bg-white text-black flex items-center border justify-between w-[8%]">
              Add New... <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-black text-white font-bold">
              <DropdownMenuItem>Project</DropdownMenuItem>
              <DropdownMenuItem>Domain </DropdownMenuItem>
              <DropdownMenuItem>Store </DropdownMenuItem>
              <DropdownMenuItem>Team Member </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="py-5 flex flex-wrap gap-5">
          {!toggle &&
            Array.from({ length: 10 }).map((item, index) => (
              <Card
                key={index}
                className="w-[450px] min-h-[200px] p-5 bg-[#0a0a0a] border border-gray-500 text-white "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      className="h-9"
                      src="https://vercel.com/api/v0/deployments/dpl_2yxz7hEap3Uam72PHxysY34VFsGz/favicon?project=job-form&readyState=READY&teamId=team_wttIKTFK5qzZgwOdkLycyh9o"
                      alt=""
                    />
                    <div>
                      <CardTitle>event-form</CardTitle>
                      <CardDescription>
                        event-form-seven.vercel.app
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-8 h-8 grid place-items-center rounded-full border-2 border-gray-500">
                      <SlGraph />
                    </div>
                    <BsThreeDots />
                  </div>
                </div>
                <Button className="mt-3 rounded-full">
                  <FaGithub />
                  kaushalkumar8582/Event-Form
                </Button>
                <CardFooter className="p-2">
                  fix <br></br>
                  127 day ago on main
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
