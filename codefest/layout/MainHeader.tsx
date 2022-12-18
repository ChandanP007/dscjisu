import Image from "next/image";


export default function MainHeader() {
    return (
        <section>
            <div className='lg:p-20 sm:p-2  flex  flex-col py-10'>
                <div className="text-center shadow-2xl rounded-lg shadow-cyan-600">
                    <Image
                        src="/codefest/Codefest header.png"
                        width={1900}
                        height={1000}
                        alt="Codefest Header"
                        className="rounded-md cover-full shadow-xl"

                    />
                </div>
            </div>
        </section>
    );
}