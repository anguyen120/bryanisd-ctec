import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MissionStatement from "../components/MissionStatement";
import Cta from "../components/Cta";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Bryan ISD CTE Home" />
        <meta
          name="description"
          content="Bryan Independent School District serves K-12th grade students and is located in Bryan, TX."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        />
         <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-BTEVP7N9QD`}
          />
        <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BTEVP7N9QD', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <main className="flex-grow">
        <Header />
        <Hero />
        <MissionStatement />
        <Cta />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
