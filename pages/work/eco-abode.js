import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import IconBox from "../../components/IconBox/IconBox";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faQuoteLeft,
  faCalendarCheck,
  faWallet,
  faMoneyBillWave,
  faExternalLinkAlt,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/work/eco-abode.module.css";

const EcoAbodeCaseStudy = () => {
  return (
    <div>
      <Head>
        <title>Eco Abode | Work | Kreative Dreamflow</title>
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
      <Wrapper bg="white" paddingTop="200px" paddingBottom="100px">
        <div className={styles.hero}>
          <div>
            <LineLabel color="#32746D">Eco Abode</LineLabel>
            <h1 style={{ paddingBottom: "100px" }}>
              A rental property management company creating the easiest
              experience for new home owners
            </h1>
            <FontAwesomeIcon icon={faArrowDown} size="1x" />
          </div>
        </div>
      </Wrapper>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
                "https://kmg-site-assets.kaycdn.com/clients/eco-abode/house-generic.jpg",
              amount: 0.4,
            },
          ]}
          style={{
            height: "700px",
          }}
        />
      </ParallaxProvider>
      <Wrapper bg="#EEF8F7" paddingTop="200px" paddingBottom="200px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={4}>
              <h2 style={{ paddingBottom: "50px" }}>The Challenge</h2>
            </Col>
            <Col sm={12} md={8}>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Eco Abode is a rental property management business started in
                2019. When starting, they were focused on client experience and
                generating leads in their community; a website was the last
                thing on their mind. They put together a small, one-page website
                to get started with nothing more than a contact page. However,
                when the COVID19 pandemic hit, they realized they needed to
                shift their marketing strategy online and build a new website
                that can correctly represent their brand and help generate new
                customers. After doing some research on their own and talking to
                other marketing agencies in the area, they landed on Kreative
                Dreamflow for our customer-centric design, transparent pricing,
                and affordable rates.
              </p>
              <a className={styles.link} href="https://ecoabodellc.com">
                <span style={{ marginRight: "10px" }}>View Project</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
              </a>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingTop="200px" paddingBottom="200px">
        <LineLabel color="#32746D">BEFORE DREAMFLOW</LineLabel>
        <h2 className={styles.larger_h1} style={{ paddingBottom: "50px" }}>
          Without the right digital marketing partner by their side, Eco Abode's
          original website made it much harder for them to succeed online.
        </h2>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <img
                className={styles.image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/old-homepage.png"
                alt="Original Eco Abode website homepage"
              />
            </Col>
            <Col sm={6} style={{ paddingTop: "100px" }}>
              <div className={styles.image_group}>
                <p className={styles.larger_p}>
                  Their website lacked a moden style/theme, more than one page,
                  and useful, sales-driven copywriting. These problems are all
                  too common amongst websites in general, not just in the real
                  estate space.
                </p>
              </div>
              <div className={styles.image_group}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-logo-old-large-black.webp"
                  alt="Original Eco Abode logo in Black"
                />
                <p className={styles.larger_p}>
                  The original logo lacked originality. Not only that, but
                  because their logo is only text, it's difficult for new
                  customers to know what Eco Abode does or what industry they're
                  in.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F8FBF9" paddingTop="150px" paddingBottom="150px">
        <div className={styles.testimonial_section}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="4x"
            style={{ color: "#32746D" }}
          />
          <h2 style={{ paddingTop: "50px" }}>
            We knew we needed a new website and brand, but couldn't figure out
            exactly what was missing. We were scared that if we didn't know
            exactly what we needed, an agency would be a waste of money
            <br />
            <br />
            But the team at Dreamflow didn't need much information to get
            started. They knew what worked and what our market wanted extremely
            well.
          </h2>
          <p>Pankaj Gupta, Founder of Eco Abode</p>
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={4}>
              <LineLabel color="#32746D">PHASE 1</LineLabel>
              <h2 style={{ paddingBottom: "50px" }}>Research</h2>
            </Col>
            <Col sm={12} md={8}>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Our first step was in doing some research into the local
                competition. Learning about what other businesses lacked on
                their websites, gave us an edge in making Eco Abode's website
                stand out and look like they belong in the year 2020.
              </p>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Eco Abode mentioned that they wanted to convey professionalism
                and high service quality through their website. So we also
                researched websites for businesses in different industries, but
                with similar brand elements, like investment banking.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F8FBF9" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={50}>
            <Col sm={12} md={6}>
              <LineLabel color="#32746D">PHASE 2</LineLabel>
              <h2 style={{ paddingBottom: "50px" }}>Branding</h2>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                To create a new brand for Eco Abode, we took the best parts of
                our research and paired them with Eco Abode's own input on what
                they wanted to represent to their customers. Since a main part
                of their brand is high service quality, we focused on creating a
                higher end look for their new logo. We used the popular, Josefin
                Sans, typeface to avoid the text of the logo from looking cheap
                and paired it with the drawing of the house to symbolize that
                Eco Abode deals with real estate.
              </p>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Originally their website only had a few main colors like green
                and grey. We picked new shades and styles of green and picked
                gradients to expand Eco Abode's color pallete, allowing our team
                to make their website less "one-colored" and more vibrant.
              </p>
            </Col>
            <Col
              sm={12}
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.image_group}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-logo-new-black-framed.png"
                  alt="New Eco Abode logo in black framed"
                />
                <p>New Logo in Black</p>
              </div>
              <div className={styles.image_group}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-logo-new-white-framed.png"
                  alt="New Eco Abode logo in white framed"
                />
                <p>New Logo in White</p>
              </div>
              <div className={styles.image_group}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-logo-square-black-framed.png"
                  alt="New Eco Abode logo square in black framed"
                />
                <p>New Square Logo in Black</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={6}>
              <LineLabel color="#32746D">PHASE 3</LineLabel>
              <h2 style={{ paddingBottom: "50px" }}>Prototyping</h2>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Once we were done, we took the best parts of our research and
                newly created brand to create a Hand Drawn Wireframe (HDW) for
                what the new website should look like. Unlike other agencies, we
                chose to spend less time with prototyping and more time on
                actual development. We use our HDW as a starting point, but not
                the finished product.
              </p>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                This approach allows us to finish projects faster, costing our
                clients, like Eco Abode in this case, a lot less. We're also
                able to get our clients a look at their finished website sooner
                than later, giving them even more flexibility and choice for the
                finished product.
              </p>
            </Col>
            <Col
              sm={12}
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.image_group}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/scan2.jpg"
                  alt="Hand drawn wireframe of Eco Abode"
                  style={{ transform: "rotate(180deg)" }}
                />
                <p style={{ paddingTop: "25px" }}>
                  Hand drawn wireframes of various Eco Abode webpages
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#FFF9F1" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={4}>
              <LineLabel color="#32746D">PHASE 4</LineLabel>
              <h2 style={{ paddingBottom: "50px" }}>Development</h2>
            </Col>
            <Col sm={12} md={8}>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                The final phase our this project is where we take all the
                research and prototyping and create a finished product. Our team
                leveraged Wordpress for Eco Abode, as that would be the most
                cost effective option. However, we did not use any prebuilt or
                paid themes, all designing was done from scratch. Eco Abode's
                priority was in standing out from the rest of the marketplace.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F8FBF9" paddingTop="200px" paddingBottom="200px">
        <div style={{ textAlign: "center" }}>
          <LineLabel color="#32746D">AFTER DREAMFLOW</LineLabel>
          <h2 className={styles.larger_h1} style={{ paddingBottom: "50px" }}>
            Every inch, improved.
          </h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={6}>
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-homepage-services-cols.png"
                alt="Eco Abode services on homepage"
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-aboutpage-stuff.png"
                alt="Eco Abode stuff on about page"
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-aboutpage-hero.png"
                alt="Eco Abode hero section on about page"
              />
            </Col>
            <Col sm={6}>
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-contact-box.png"
                alt="Eco Abode contact box on contact page"
              />

              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-homepage-section.png"
                alt="Eco Abode section on homepage"
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-homepage-contact.png"
                alt=""
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-servicespage-stuff.png"
                alt="Eco ABode stuff on services page"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="200px" paddingTop="200px">
        <LineLabel color="#32746D">Services Used</LineLabel>
        <h2 style={{ paddingBottom: "50px" }}>
          Our vast selection of products allowed Eco Abode to get everything
          they needed with one partner, Dreamflow.
        </h2>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                raised={true}
                logo="https://kmg-site-assets.kaycdn.com/toprank-logo-new.png"
                alt="Kreative TopRank logo in Green"
                description="Search engine optimization"
                text="Eco Abode used TopRank to optimize their newly built website for higher search rankings."
                button={
                  <Button
                    href="/toprank"
                    fill="#176A3A"
                    textColor="white"
                    hoverColor="#53AF7A"
                    radius="3px"
                    border="1px solid #176A3A"
                    hoverBorder="1px solid #53AF7A"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/pageflow-color.webp"
                alt="Kreative Pageflow logo in Purple"
                description="Website design"
                text="Pageflow was the main service used by Eco Abode to launch their new website and brand."
                button={
                  <Button
                    href="/pageflow"
                    fill="#6135DE"
                    textColor="white"
                    hoverColor="#7651E0"
                    radius="3px"
                    border="1px solid #6135DE"
                    hoverBorder="1px solid #7651E0"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/kopy-color.webp"
                logoWidth="80%"
                alt="Kreative Kopy logo in Navy Blue"
                description="Copywriting"
                text="Eco Abode used Kopy to get professional, sales-driven copywriting for their newly built website without having to do it themselves"
                button={
                  <Button
                    href="/kopy"
                    fill="#1C5592"
                    textColor="white"
                    hoverColor="#338EEE"
                    radius="3px"
                    border="1px solid #1C5592"
                    hoverBorder="1px solid #338EEE"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    See Kopy
                  </Button>
                }
              />
            </Col>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/kreative-kanvas-logo-color.webp"
                logoWidth="100%"
                alt="Kreative Kanvas logo in Neon Green"
                description="Graphic Design"
                text="Have a full time design team on standby, without breaking the bank."
                button={
                  <Button
                    href="/kanvas"
                    fill="#029E82"
                    textColor="white"
                    hoverColor="#00DAB3"
                    radius="3px"
                    border="1px solid #029E82"
                    hoverBorder="1px solid #00DAB3"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#BBE2DE" paddingBottom="200px" paddingTop="200px">
        <div style={{ textAlign: "center" }}>
          <LineLabel color="#32746D">RESULTS Delivered</LineLabel>
          <h2 style={{ paddingBottom: "100px" }}>
            Dreamflow delivered everything required and more
          </h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={100}>
            <Col md={6} lg={3}>
              <IconBox
                icon={faCalendarCheck}
                iconColor="#104F55"
                header="Website Created in 13 Days"
                text={`Eco Abode wanted to move fast to start catering to potential customers online. Working with Dreamflow got them up and running in under 2 weeks.`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
            <Col md={6} lg={3} className={styles.iconbox}>
              <IconBox
                icon={faWallet}
                iconColor="#104F55"
                header="$1500 Total Cost"
                text={`Every step of our process was optimized to reduce costs giving Eco Abode a record low project cost. $1500 for a website, logo, and SEO setup is less than what most large agencies charge.`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
            <Col md={6} lg={3} className={styles.iconbox}>
              <IconBox
                icon={faMoneyBillWave}
                iconColor="#104F55"
                header="10% Increase in Leadflow"
                text={`Our help with design not only revamped their image, but helped with actual sales. As a result of our work, they got more incoming phone calls`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
            <Col md={6} lg={3} className={styles.iconbox}>
              <IconBox
                icon={faArrowsAlt}
                iconColor="#104F55"
                header="4 Products in one"
                text={`The best part about working with an all-in-one solution like Dreamflow is that Eco Abode got everything they needed with one single partner, saving them time and money.`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-compilation.png",
                amount: 0.5,
                expanded: false,
              },
            ]}
            style={{
              height: "700px",
            }}
          />
        </ParallaxProvider>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default EcoAbodeCaseStudy;
