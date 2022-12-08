import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';
import './globals.css';

function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page);



  return (
    <>
      <Head>
        <title>Google Developer Student Clubs JIS University - Kolkata</title>
        <meta name="description" content="Google Developer Student Clubs JIS University - Kolkata | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <meta name="description" content="Check out Google Developer Student Clubs JIS University - Kolkata events, learn more or contact this organizer."></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@dscjisu" />
        <meta name="twitter:title" content="Google Developer Student Clubs" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1200,q_100,w_1200/v1/gcs/platform-data-dsc/contentbuilder/GDG-Bevy-SocialShare-v2_vPiQuXZ.png" />
        <meta property="og:site_name" content="Google Developer Student Clubs" />
        <meta property="og:image" content="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/JIS%20UNIVERSITY_vjKFdN0.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/JIS%20UNIVERSITY_vjKFdN0.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:title" content="JIS University - Kolkata | Google Developer Student Clubs" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://dscjisu.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:ttl" content="777600" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Navbar />
      <NextNProgress
        color="#62B6B7"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ easing: 'ease', speed: 500 }}
      />

      <Component {...pageProps} />
      <Footer />
    </>
  )

}

export default MyApp;
