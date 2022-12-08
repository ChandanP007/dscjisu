
const AgendaCard = ({ title, description }) => {
    return (
        <div className="bg-gradient-to-tr from-[#E94560] to-[#0F3460] hover:bg-gradient-to-br   px-5 py-2 rounded-lg ">
            <div className=" py-5">
                <h1 className="text-4xl text-white font-bold underline decoration-dotted decoration-blue-600">{title}</h1>
                <div className="text-clip">
                    <p className="text-clip">
                        <span className="text-white font-mono">{description}</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

const AgendaData = [
    {
        title: "Connect",
        description: 'Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors.'
    },
    {
        title: "Learn",
        description: 'Learn about Google developer technologies through a series of workshops, tech talks, and other events. These events are led by students, for students.'
    },
    {
        title: "Grow",
        description: 'Grow your knowledge and skills by working on projects with other students. You can also get involved in Google’s developer programs and events.'
    }
]


export default function Agenda() {
    return (
        <>
            <div className="bg-slate-900 lg:p-10 p-2 flex justify-center">
                <div className="container lg:mx-24 mx-auto bg-slate-900 text-center">
                    <div className="flex lg:flex-row flex-col  justify-center gap-6  rounded-lg ">

                        {
                            AgendaData.map((item, index) => {
                                return (
                                    <AgendaCard key={index} title={item.title} description={item.description} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}