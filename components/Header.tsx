import Image from "next/image";
import React, { ReactElement } from "react";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <div className="shadow border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            alt="logo"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            alt="logo"
            objectFit="contain"
          />
        </div>
        {/* middle - search input */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <div className="h-10 w-10 cursor-pointer relative">
            <Image
              layout="fill"
              className="absolute rounded-full"
              src="https://picsum.photos/100"
              objectFit="contain"
              alt="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
