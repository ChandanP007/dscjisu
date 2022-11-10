import TeamCard from '../components/cards/team/TeamCard';

interface team {
    team: TeamProps[]
}
interface TeamProps {

    id: string;
    name: string;
    image: string;
    description: string;
    link: string;
    tagline: string;
    linkedin: string;
    github: string;
    twitter: string;
    role: string;

}

export default function Team({ team }: team) {

    return (
        <div className=" py-20 text-center bg-slate-900 px-5">
            <h1 className='lg:text-6xl text-4xl text-white font-mono'>Organizers</h1>
            <p className='text-white font-light font-mono pt-6 text-base px-5 text-clip'>
                We are a team of passionate developers who are passionate about building great products.
            </p>
            <div className="lg:px-24 sm:p-5">
                <div className=" grid  justify-center  lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1  lg:mx-5 gap-12">
                    {team?.map((item: TeamProps) => {
                        return (
                            <TeamCard
                                id={item.id}
                                tagline={item.tagline}
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                role={item.role}
                                linkedin={item.linkedin}
                                github={item.github}
                                twitter={item.twitter}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}