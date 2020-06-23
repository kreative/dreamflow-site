import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";

const BlogPostsPage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog | Kreative Dreamflow</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/general/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/general/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/general/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <Wrapper bg="white" paddingTop="200px" paddingBottom="200px">
        {posts.map((post) => (
          <div className="post_wrapper">
            <BlogPostCard
              label={post.label}
              title={post.title}
              author={post.author}
              date={post.easyPublishingDate}
              description={post.description}
            />
          </div>
        ))}
      </Wrapper>
      <Footer />
      <style jsx>{`
        .post_wrapper {
          margin-bottom: 25px;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  let posts = [];

  for (let i = 0; i < files.length; i++) {
    const markdownWithData = fs
      .readFileSync(path.join("posts", files[i]))
      .toString();
    const parsedMarkdown = matter(markdownWithData);
    const metadata = parsedMarkdown.data;
    const pd = moment(metadata.publish_date, "MM-DD-YYYY");
    metadata.easyPublishingDate = `${pd.month()} ${pd.date()}. ${pd.year()}`;
  }

  const sortedPosts = posts.sort((a, b) => {
    const date1 = new Date(a.publish_date);
    const date2 = new Date(b.publish_date);

    return date1 - date2;
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default BlogPostsPage;
