import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const BlogPost = ({ contents, data }) => {
  return (
    <div>
      <Head>
        <title>{data.title} | Blog | Kreative Dreamflow</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithData = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithData);
  const parsedHTML = marked(parsedMarkdown.content);

  return {
    props: {
      contents: parsedHTML,
      data: parsedMarkdown.data,
    },
  };
};

export default BlogPost;
