import Head from "next/head";
import Button from "../components/Button/Button";

const NotFoundPage = () => {
  return (
    <div>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <div className="body">
        <div className="not_found_contents">
          <h1>Page not found</h1>
          <p>The page you're looking for can't be found. Enjoy these Shibus instead :)</p>
          <Button 
            fill="white"
            textColor="black"
            radius="3px"
            border="1px solid white"
            padding="15px 50px"
            raised={false}
            grow={true}
          >
            Go to Homepage
          </Button>
        </div>
      </div>
      <style jsx>{`
        p, h1 {
          color: white;
        }

        .body {
          background: url("https://portal-assets.kaycdn.com/shibu-cropped.gif") no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          height: 100vh;
        }

        .not_found_contents {
          padding-top: 5%;
          padding-left: 5%;
        }

      `}</style>
    </div>
  );
};

export default NotFoundPage;
