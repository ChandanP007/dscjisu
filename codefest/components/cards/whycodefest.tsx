

export default function WhyCodeFestCard({ title, description }: any) {

    return (
        <>
            <div className="p-5 rounded-xl">
                <div
                    className="flex flex-col text-center
                 justify-center bg-slate-900 
                 drop-shadow-xl shadow-cyan-300 shadow-lg border-gradient from-current to-red-900 
                 p-8 rounded-xl text-white">
                    <h1 className="text-2xl font-bold text-[#FB2576]">{title}</h1>
                    <p className="!p-0">{description}</p>
                </div>
            </div>

        </>
    )
}