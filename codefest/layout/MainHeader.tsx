import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
    return (
        <section>
            <div className='lg:pt-20 sm:p-2  flex  flex-col pt-10'>
                <div className="text-center shadow-2xl rounded-lg shadow-cyan-600">
                    <Image
                        src="/codefest/Codefest header.png"
                        width={1900}
                        height={1000}
                        alt="Codefest Header"
                        className="rounded-md cover-full shadow-xl"
                    />
                </div>
                <div className="flex justify-center items-center p-20">
                    <Link href={'codefest/register'} passHref>
                        <button className="hover:bg-yellow-400 hover:text-black px-5 py-2 text-white border-yellow-400 border-2 rounded-lg hover:shadow-2xl shadow-yellow-600">
                            <h1>Register</h1>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}