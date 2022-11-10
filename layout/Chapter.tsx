import Image from 'next/image'

function Newsletter() {
    return (
        <div className='lg:p-20 sm:p-2 flex  flex-col text-center bg-slate-800 py-10'>
            <h1 className='lg:text-6xl text-4xl text-white font-mono'>Stay <span className='underline decoration-solid underline-offset-2 decoration-yellow-300 font-mono updated'>Updated</span></h1>
            <p className='text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                Want to stay up to date with the latest news and updates?
            </p>
            <p className='text-white  font-mono  font-light pt-2 text-base px-5 text-clip'>
                Join the <span className='underline underline-offset-4 decoration-solid decoration-cyan-400 font-mono font-extrabold text-lg'>Chapter</span> in the Google Developer Clubs  and stay up to date with the latest news , updates and Events.
            </p>
            <div className='flex justify-center p-10'>

                <div className="bg-slate-600 rounded-lg p-10 ">
                    <Image
                        src="/images/gdsclogo.jpg"
                        alt="Gdsc_Logo"
                        height={80}
                        width={80}
                        className='rounded-xl m-2 hover:rotate-180 h-20 transition-all duration-1000'
                        onClick={
                            () => {
                                window.open('https://gdsc.community.dev/jis-university-kolkata/', '_blank')
                            }
                        } />
                </div>

            </div>

        </div>
    )
}

export default Newsletter