import Head from 'next/head';
import CommunityData from '../content/community.json';
import EventData from '../content/events.json';
import TeamData from '../content/teams.json';
import Agenda from '../layout/agenda';
import Blog from '../layout/blog';
import Chapter from '../layout/Chapter';
import Community from '../layout/Community';
import Connect from '../layout/Connect';
import Events from '../layout/Events';
import Gallery from '../layout/gallery';
import Header from '../layout/Header';
import Team from '../layout/Team';





export async function getServerSideProps() {


  // const res = await fetch(`${process.env.API_URL}/api/event`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // });
  // const EventData = await res.json();
  // const members = await fetch(`${process.env.API_URL}/api/team`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // });
  // const TeamData = await members.json();

  const Community = CommunityData;
  return {
    // will be passed to the page component as props
    props: {
      team: TeamData,
      event: EventData.filter((event: any) => event.isCompleted === false),
      community: Community
    },
  }
}

const Home = ({ team, event, community }: any) => {
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
        <meta property="og:url" content="https://gdsc.community.dev/jis-university-kolkata/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <main>
        <Header />
        <Agenda />
        <Events events={event} />
        <Blog />
        <Team team={team.slice(0, 3)} />
        <Connect />
        <Community community={community} />
        <Chapter />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
