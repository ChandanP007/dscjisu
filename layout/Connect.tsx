import Image from "next/image"

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
                                <div className="p-10 flex lg:flex-row flex-col gap-4 justify-center text-center items-center">
                                    <a href="https://github.com/dscjisu" className="w-full flex gap-2 bg-white hover:bg-violet-700 p-2 rounded-lg justify-center items-center text-center">
                                        <Image width={32} height={30} className="button-icon" src="/github-192x192.png" loading="lazy" alt="" />GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/company/dscjisu" className="w-full  flex gap-2 bg-white p-2 rounded-lg justify-center items-center text-center">
                                        <Image width={32} height={30} className="button-icon" src="/linkedin-192x192.png" loading="lazy" alt="" />Linkedin®
                                    </a>
                                    <a href="https://twitter.com/dscjisu" className=" w-full flex gap-2 bg-white p-2 rounded-lg justify-center items-center text-center">
                                        <Image width={32} height={30} className="button-icon" src="/twitter-192x192.png" loading="lazy" alt="" />Twitter
                                    </a>
                                    <a href="https://www.facebook.com/groups/gdscjisu" className=" w-full  flex gap-2 bg-white p-2 rounded-lg justify-center items-center text-center">
                                        <Image width={32} height={30} className="button-icon" src="/facebook-192x192.png" loading="lazy" alt="" />Facebook
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}