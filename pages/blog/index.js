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
      <Wrapper bg="" paddingTop="" paddingBottom="">

      </Wrapper>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://dreamflow-cms.kreativekws.com/api/posts?version=short");
  const data = await res.json();
  return {
    props: { posts: data.data.posts },
  };
};

export default BlogPostsPage;