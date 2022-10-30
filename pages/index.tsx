// import SpeedDail from '../components/speedDail';
import Chapter from '../layout/Chapter';
import Community from '../layout/Community';
import Header from '../layout/Header';
import Team from '../layout/Team';

import Head from 'next/head';
import CommunityData from '../content/community.json';
import EventData from '../content/events.json';
import TeamData from '../content/team.json';

export async function getStaticProps() {

  // const team_data = await fetch("http://localhost:3000/api/team");
  // const event_data = await fetch("http://localhost:3000/api/event");
  // const community_data = await fetch("http://localhost:3000/api/community");
  // const Team = await team_data.json()
  // const Event = await event_data.json()
  // const Community = await community_data.json()
  // sort the event by date
  // const sortedEvent = Event.sort((a, b) => {
  //   return (b.id) - (a.id);
  // });

  const Team = TeamData;
  const Event = EventData;
  const Community = CommunityData;


  return {
    props: {
      team: Team,
      event: Event,
      community: Community
    }, // will be passed to the page component as props
  }
}

const Home = ({ team, _event, community }) => {
  return (
    <>
      <Head>
        <title>DSC JIS University</title>
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
        <meta property="og:ttl" content="777600" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Header />
      {/* <Events event={event} /> */}
      <Team team={team.slice(0, 8)} />
      <Chapter />
      <Community community={community} />
      {/* <SpeedDail /> */}
    </>
  );
};

export default Home;
