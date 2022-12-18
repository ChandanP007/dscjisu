import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="flex justify-center p-10 text-white">
                <div className="container mx-auto px-10 flex justify-center flex-col">
                    <div className="relative">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-center text-5xl text-white">About Us</h1>
                            <h1 className="absolute text-6xl top-[-10px]  text-[##fafafa] opacity-5 uppercase">About CodeFest</h1>

                        </div>

                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 flex justify-center items-center">
                            <p className="text-center text-lg text-gray-500 font-thin">
                                Codefest 2023 is the premier event for tech professionals and enthusiasts from around the world. Featuring the latest in tech trends, products, and services, the festival is the perfect place for companies to showcase their cutting-edge technologies and solutions.
                            </p>
                        </div>
                        <div className="col-span-1 flex justify-center items-center py-10">
                            <Image
                                src="/codefest/Codefest.png"
                                width={340}
                                height={340}
                                alt="About"
                                className="p-10 rounded-full shadow-inner shadow-slate-200"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute right-[-100px] rotate-90">
                    <div className="flex  justify-center items-center">
                        <h1 className="text-4xl font-bold text-white opacity-20 overflow-x-clip ">CodeFest 2023</h1>
                    </div>
                </div>
                <div className="absolute left-[-100px] top-[50px] rotate-90">
                    <div className="flex  justify-center items-center">
                        <h1 className="text-4xl font-bold text-white opacity-20 overflow-x-clip ">CodeFest 2023</h1>
                    </div>
                </div>
            </div>
        </>
    )
}