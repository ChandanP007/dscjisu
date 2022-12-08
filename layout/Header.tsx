import Image from "next/image"

function Header() {
    return (
        <div className=' text-center mx-auto bg-slate-900 text-white'>
            <div className="container   lg:p-10 mx-auto ">
                <div>
                    <div className="mx-auto h-25 ourlogo">
                        <Image
                            src="/animation_gdsc.webp"
                            alt="branding"
                            className='mx-auto pb-6 h-full'
                            height={250}
                            width={250}
                        />
                        <h3 className="brandingt lg:text-5xl text-xl">Google Developer Students Club</h3>
                        <h4 className="brandingt">Jis University</h4>
                    </div>
                    <div className=" text-clip lg:px-16  herop">
                        <p className='font-mono font-medium lg:text-lg text-xs'>The Google Developer&apos;s Student Club, <span className='community'>JIS UNIVERSITY</span> , 💐 welcomes all of you wholeheartedly. We Welcome students to grow and learn together.
                            We at JIS University build a <span className='underline text-2xl font-extrabold font-mono decoration-solid decoration-cyan-300 underline-offset-2'>peer-to-peer</span>  learning process making a better environment for students to learn and develop.
                            This year our Club is aiming to organize resourceful <span className='underline  font-extrabold text-2xl font-mono  decoration-solid shadow-2xl   shadow-violet-300 decoration-violet-600 underline-offset-4'>Bootcamps</span> and Interesting Workshops. The major idea is to learn new skills through hands-on workshops and create innovative projects which will help in the betterment of our <span className='underline text-2xl  font-extrabold font-mono  decoration-solid shadow-2xl   shadow-yellow-100 decoration-yellow-300 underline-offset-2'>Society.</span></p>
                    </div>
                </div>

                <div className="p-10">
                    <div className="flex flex-row gap-2">
                        <div className="bg-red-900 min-h-10 min-w-10 "></div>
                        <div className="bg-yellow-900 min-h-10 min-w-10 "></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header