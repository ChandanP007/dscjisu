
export default function Agenda() {
    return (
        <>
            <div className="bg-slate-900 p-10">
                <div className="container mx-auto bg-slate-900 text-center">
                    <div className="flex lg:flex-row flex-col  justify-between gap-10">
                        <div className=" px-5 py-2">
                            <div className="bg-slate-800 rounded-lg">
                                <h1 className="text-4xl text-white font-bold">Connect</h1>
                                <p className="text-start">
                                    <span className="text-white">Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors. </span>
                                </p>
                            </div>
                        </div>
                        <div className=" px-5 py-2">
                            <div className="bg-slate-800 rounded-lg">
                                <h1 className="text-4xl text-white font-bold">Learn</h1>
                                <p>
                                    <span className="text-white">Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person. </span>
                                </p>
                            </div>
                        </div>
                        <div className=" px-5 py-2">
                            <div className="bg-slate-800 rounded-lg">
                                <h1 className="text-4xl text-white font-bold">Grow</h1>
                                <div className="text-start">
                                    <p className="text-left">
                                        <span className="text-white">Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn. </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}