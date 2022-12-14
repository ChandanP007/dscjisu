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


export async function getStaticProps() {

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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@dscjisu" />
        <meta name="twitter:title" content="Google Developer Student Clubs" />
        <meta name="twitter:description" content="Connect - Learn - Grow" />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1556549974783303680/qPBMcmcN_400x400.jpg" />
        <meta property="og:site_name" content="Google Developer Student Clubs JIS University Kolkata" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1556549974783303680/qPBMcmcN_400x400.jpg" />
        <meta property="og:image:secure_url" content="https://pbs.twimg.com/profile_images/1556549974783303680/qPBMcmcN_400x400.jpg" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:title" content="JIS University - Kolkata | Google Developer Student Clubs" />
        <meta property="og:description" content="Connect - Learn - Grow" />
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
