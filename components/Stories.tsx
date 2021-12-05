import React, { ReactElement, useEffect, useState } from "react";
import faker from "faker";
import Image from "next/image";
import Story from "./Story";

interface Props {}

export interface Profile {
  id: number;
  name: string;
  username: string;
  avatar: string;
  email: string;
  dob: Date;
  phone: string;
  website: string;
}

function Stories({}: Props): ReactElement {
  const [suggestions, setSuggestions] = useState<Profile[]>([]);
  useEffect(() => {
    const fakeSuggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(fakeSuggestions);
    setSuggestions(fakeSuggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 mt-8 bg-white border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 mx-auto">
      {suggestions.map((profile) => (
        <Story key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default Stories;
