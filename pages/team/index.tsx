import Head from "next/head";
import TeamCard from "../../components/cards/team/TeamCard";


interface TeamMeta {

    id: string;
    name: string;
    role: string;
    linkedin: string;
    github: string;
    twitter: string;
    tagline: string;
    image: string;

}

export async function getServerSideProps() {
    const members = await fetch(`${process.env.API_URL}/api/team`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // await connectMongo();
    // const members: TeamMeta[] = await TeamSchema.find({});
    // const TeamData = await members.map((member) => ({
    //     id: member.id,
    //     name: member.name,
    //     role: member.role,
    //     linkedin: member.linkedin,
    //     github: member.github,
    //     twitter: member.twitter,
    //     tagline: member.tagline,
    //     image: member.image,
    // }))
    const TeamData = await members.json()
        ;
    console.log(TeamData);
    return { props: { teams: TeamData } };
}


export default function Blog({ teams }: { teams: TeamMeta[] }) {
    return (
        <>
            <Head>
                <title>Teams | Google Developer Student Clubs JIS University - Kolkata</title>
                <meta name="description" content="We thank all the core team members for their contribution to the project, Events and the community. Without them, this community would not have been possible." />
                <meta name="tags" content="team coreteam core team gdsc team gdsc india team" />
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
            <div className='lg:p-20 sm:p-2 bg-white flex  flex-col  dark:bg-[#182232] py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl dark:text-white font-mono'>Team</h1>
                    <p className='dark:text-white font-light font-mono pb-10 text-base px-5 text-clip'>
                        We thank all the core team members for their contribution to the project, Events and the community. Without them, this community would not have been possible.
                    </p>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  justify-center'>
                    {teams.map((team) => (
                        <TeamCard
                            id={team.id}
                            key={team.id}
                            name={team.name}
                            role={team.role}
                            linkedin={team.linkedin}
                            github={team.github}
                            twitter={team.twitter}
                            tagline={team.tagline}
                            image={team.image}
                        />
                    ))}
                </div>
            </div>

        </>
    );
}