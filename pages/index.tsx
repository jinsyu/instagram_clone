import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll ">
      <Head>
        <title>Instagram Clone</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
};

export default Home;
