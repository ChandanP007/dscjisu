import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="flex justify-center lg:p-10 text-white">
                <div className="container mx-auto lg:px-10 flex justify-center flex-col">
                    <div className="relative">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-center text-5xl text-white">About Us</h1>
                            <h1 className="absolute lg:text-6xl text-3xl lg:top-[-10px]  text-[##fafafa] opacity-5 uppercase">About CodeFest</h1>

                        </div>

                    </div>
                    <div className="lg:grid grid-cols-3">
                        <div className="lg:col-span-2 flex justify-center items-center">
                            <p className="text-center text-lg text-gray-500 font-thin">
                                Codefest 2023 is the premier event for tech professionals and enthusiasts from around the world. Featuring the latest in tech trends, products, and services, the festival is the perfect place for companies to showcase their cutting-edge technologies and solutions.
                            </p>
                        </div>
                        <div className="lg:col-span-1 flex justify-center items-center py-10">
                            <Image
                                src="/codefest/Codefest.png"
                                width={340}
                                height={340}
                                alt="About"
                                className="rounded-full shadow-inner shadow-slate-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}