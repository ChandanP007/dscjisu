import Head from "next/head";
import TeamCard from "../../components/cards/team/TeamCard";
import TeamData from "./../../content/team.json";

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

export async function getStaticProps() {
    const teams = TeamData
    return { props: { teams } };
}


export default function Blog({ teams }: { teams: TeamMeta[] }) {
    return (
        <>
            <Head>
                <title>Projects | Google Developer Student Clubs JIS University - Kolkata</title>
            </Head>
            <div className='lg:p-20 sm:p-2 bg-white flex  flex-col  dark:bg-[#182232] py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl dark:text-white font-mono'>Team</h1>
                    <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        We thank all the core team members for their contribution to the project, Events and the community. Without them, this community would not have been possible.
                    </p>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
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