import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";




export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: `Mark P. Olivo- Creator, Designer, Developer & Team Player`,
    description: `Strive to build things that makes a difference in the world! Get in touch with me to know more.`,
    image: "/me.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
   
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.username.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.username.com/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="markpolivo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@markolivo7" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full dark:bg-gray-800">
        <Navbar />
        <div>{children}</div>
        <RoughNotation />
        <Footer />
      </main>
    </div>
  );
}
