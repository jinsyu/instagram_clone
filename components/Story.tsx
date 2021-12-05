import Image from "next/image";
import React, { ReactElement } from "react";
import { Profile } from "./Stories";

interface Props {
  profile: Profile;
}

export default function Story({ profile }: Props): ReactElement {
  return (
    <div>
      <img
        className="rounded-full p-0.5 border-red-500 border-2 w-14 h-14 object-contain cursor-pointer hover:scale-125  transform transition duration-200 ease-out scrollbar-thin scrollbar-thumb-black"
        src={`https://picsum.photos/100/?${Math.random()}`}
        alt={profile.username}
      />
      <p className="text-xs w-14 truncate text-center">{profile.username}</p>
    </div>
  );
}
