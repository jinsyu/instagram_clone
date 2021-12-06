import {
  BookmarkAltIcon,
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
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
        <span className="font-bold mr-1">{post.username}</span>
        {post.caption}
      </p>

      {/* input box */}
      <form className="flex items-center p-4 space-x-4">
        <EmojiHappyIcon className="postBtn" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}
