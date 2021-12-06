import React, { ReactElement, useEffect, useState } from "react";
import faker from "faker";

interface Props {}

interface ISuggestion {
  id: number;
  name: string;
  username: string;
  avatar: string;
  email: string;
  dob: Date;
  phone: string;
  website: string;
}

export default function Suggestions({}: Props): ReactElement {
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold cursor-pointer">
          See All
        </button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-1"
            src={profile.avatar}
            alt="avatar"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-sm text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-sm text-blue-400">follow</button>
        </div>
      ))}
    </div>
  );
}
