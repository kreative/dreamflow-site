import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/blog/singlepost.module.css";

const BlogPost = ({ contents, data }) => {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/general/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/general/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/general/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/general/site.webmanifest"/>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <title>{data.title} | Blog | Kreative Dreamflow</title>
      </Head>
      <Navbar />
      <Wrapper bg={data.color} paddingTop="200px" paddingBottom="100px">
        <div className={styles.content_wrapper}>
          <h1
            style={{ color: data.title_color }}
            className={styles.title}
          >{data.title}</h1>
          <h3
            style={{ color: data.description_color }}
            className={styles.description}
          >{data.description}</h3>
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingTop="100px" paddingBottom="100px">
        <div className={styles.content_wrapper}>
          <img
            className={styles.cover_image}
            src={data.cover_image_src}
            alt={data.cover_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
      </Wrapper>
      <Footer />
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
