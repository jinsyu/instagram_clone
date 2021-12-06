import React, { ReactElement } from "react";

interface Props {}

export default function MiniProfile({}: Props): ReactElement {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://picsum.photos/100/?123"
        className="rounded-full border p-1 w-16 h-16"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">jinsyu</h2>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">sign out</button>
    </div>
  );
}
