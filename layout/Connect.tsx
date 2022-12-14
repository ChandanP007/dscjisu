import Image from "next/image";
import Link from "next/link";

interface ISocial {
    name: string;
    link: string;
    icon: string;
}


const SocialMediaCard = ({ icon, link, name }: ISocial) => {
    return (
        <Link href={link} passHref className="lg:basis-0 sm:basis-1/3 w-full">
            <div className="flex justify-around gap-2 w-1/3  bg-white hover:bg-violet-700 p-2 rounded-lg  items-center text-center">
                <Image width={35} height={35} className="button-icon" src={icon} loading="lazy" alt={name} />
                <h1>{name}</h1>
            </div>
        </Link>
    )

}

const SocialMedia = [
    {
        name: "GitHub",
        link: "https://github.com/dscjisu",
        icon: "/github-192x192.png"
    },
    {
        name: "Linkedin®",
        link: "https://www.linkedin.com/company/dscjisu",
        icon: "/linkedin-192x192.png"
    },
    {
        name: "Twitter",
        link: "https://twitter.com/dscjisu",
        icon: "/twitter-192x192.png"
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/groups/gdscjisu",
        icon: "/facebook-192x192.png"
    }

]

export default function Connect() {
    return (
        <>
            <div className="bg-slate-800 p-10">
                <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col  justify-center gap-10">
                        <div className="text-center">
                            <h1 className="lg:text-6xl text-4xl font-mono text-white">Stay in touch</h1>
                            <p className="text-white lg:text-lg">We are always open to new ideas and suggestions. If you have any questions or want to get in touch with us, feel free to reach out to us.</p>
                            <div className="">
                                <div className="p-10 flex lg:flex-row sm:flex-col gap-2 justify-center text-center items-center">
                                    {
                                        SocialMedia.map((item, index) => {
                                            return (
                                                <SocialMediaCard key={index} name={item.name} link={item.link} icon={item.icon} />
                                            )
                                        }
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}