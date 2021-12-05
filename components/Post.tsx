import {
  BookmarkAltIcon,
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import React, { ReactElement } from "react";
import { IPost } from "./Posts";

interface Props {
  post: IPost;
}

export default function Post({ post }: Props): ReactElement {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={post.userImage}
          alt="user-image"
          className="w-12 h-12 rounded-full border p-1 mr-3 cursor-pointer"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* image */}
      <img src={post.image} className="object-cover w-full" alt="" />

      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
        <span>{post.username}</span>
        {post.caption}
      </p>
    </div>
  );
}
