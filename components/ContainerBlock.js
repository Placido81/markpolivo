import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Mark P. Olivo- Developer, Writer, Creator and YouTuber",
    description: `I've been developing websites for 3 years straight. Get in touch with me to know more.`,
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
          content={`https://my-portfolio-placido81.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://my-portfolio-placido81.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="my-portfolio" />
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
        
        <Footer />
      </main>
    </div>
  );
}
