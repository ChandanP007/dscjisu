
export default function Agenda() {
    return (
        <>
            <div className="bg-slate-900 lg:p-10 p-2">
                <div className="container mx-auto bg-slate-900 text-center">
                    <div className="flex lg:flex-row flex-col  justify-center gap-2">
                        <div className=" px-5 py-2 ">
                            <div className="bg-slate-800 rounded-lg p-5">
                                <h1 className="text-4xl text-white font-bold underline decoration-dotted decoration-blue-600">Connect</h1>
                                <div className="text-clip">
                                    <p className="text-clip">
                                        <span className="text-white font-mono">Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors. </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" px-5 py-2">
                            <div className="bg-slate-800 rounded-lg p-5">
                                <h1 className="text-4xl text-white font-bold underline decoration-dashed  decoration-yellow-600">Learn</h1>
                                <div className="text-clip">
                                    <p className="text-clip">
                                        <span className="text-white font-mono">Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person. </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" px-5 py-2">
                            <div className="bg-slate-800 rounded-lg p-4">
                                <h1 className="text-4xl text-white font-bold underline decoration-solid decoration-green-600">Grow</h1>
                                <div className="text-clip">
                                    <p className="text-clip">
                                        <span className="text-white font-mono">Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn. </span>
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