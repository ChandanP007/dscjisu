import Image from "next/image";


interface community {
    community: CommunityProps[]
}
interface CommunityProps {

    id: string;
    name: string;
    image: string;
    description: string;
    link: string;
}

export default function Community({ community }: community) {
    return (
        <div className='lg:p-20 sm:p-2 bg-white flex  flex-col text-center dark:bg-[#182232] py-10'>
            <h1 className='lg:text-6xl text-3xl dark:text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Community</span> Partner</h1>
            <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                Thanks to our community partners, who helped us  provide a better experience to our students.
            </p>
            <div className='grid  sm:grid-flow-col  lg:grid-flow-row   justify-center place-items-center p-10 gap-5'>
                {
                    community?.map((partner: CommunityProps) => {
                        return (
                            <div className='bg-slate-600 rounded-lg p-10   transition-all duration-1000' key={partner.id} title={partner.description}>
                                <Image src={partner.image} alt={partner.name} className='rounded-xl  h-20  transition-all duration-1000' height={100} width={100} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}