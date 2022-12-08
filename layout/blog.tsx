import Link from "next/link";


export default function Blog() {
    return (
        <>
            <div className=" bg-slate-900 bg-gradient-to-r from-[#e52e71] to-[#ff8a00]">
                <div className="">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h1 className="text-4xl font-bold text-white">Blog</h1>
                            <p className="text-white font-bold">Check Out Our blogs</p>
                        </div>

                        <div className="p-5 flex justify-center">
                            <Link href="/blog" passHref>
                                <button className="bg-yellow-400 p-5 rounded-lg">
                                    <h1 className=' text-black font-mono'>Explore Blogs</h1>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}