
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import WhyCodeFestCard from "../components/cards/whycodefest";

const whycodefest = [{
    title: '300+',
    description: 'Developers to meet',
    icon: InsertEmoticonIcon
}, {
    title: '10+',
    description: 'Events to choose from',
    icon: EmojiEventsIcon
},
{
    title: '2+',
    description: 'Days of fun and learning',
    icon: CalendarTodayIcon
}
]

export default function WhyCodeFest() {

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="flex text-center justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">Why Codefest?</h1>
                </div>
                <div className="container lg:p-10 mx-auto">
                    <div className="grid lg:grid-cols-3  gap-1">
                        {whycodefest.map((item, index) => {
                            return (
                                <WhyCodeFestCard key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}