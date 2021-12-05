import React, { ReactElement } from "react";
import Post from "./Post";

interface Props {}

export interface IPost {
  id: string;
  username: string;
  userImage: string;
  image: string;
  caption: string;
}

const posts = [
  {
    id: "123",
    username: "jinsyu",
    userImage: "https://picsum.photos/100?1",
    image: "https://picsum.photos/300?1",
    caption: "subscribe it",
  },
];

export default function Posts({}: Props): ReactElement {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
