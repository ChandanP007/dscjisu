import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import Link from 'next/link';
export interface IEventCard {
  name: string;
  description: string;
  eventpic: string;
  locationUrl: string;
  date: string;
  eventLink: string;
  id: string;
  isCompleted: boolean;
  isActive: boolean;
  type: string;
  locationName: string;
  slug: string;
}

const EventCard: React.FC<IEventCard> = ({ description, eventpic, name, date, locationUrl, eventLink, id, isCompleted, isActive, type, locationName, slug }) => {
  return (
    <Link href={`/event/${slug}`} passHref>
      <div className="lg:mx-2  h-full lg:p-0 xs:p-8" title={description}>
        <div className='flex  flex-col lg:flex-row bg-white  h-full w-full rounded-xl shadow-lg dark:shadow-slate-300 dark:shadow-md' key={id}>
          <div className='lg:rounded-lg rounded-full mx-auto  my-auto p-5'>
            <Image src={eventpic} className="lg:rounded-lg rounded-full " width={144} height={144} alt={name} />
          </div>
          <div className='flex flex-col px-5 pt-2'>
            <div className="flex gap-4 justify-between">
              <p className=' font-mono text-black text-xs rounded-md   p-2'>{type}</p>
              <p className={`font-mono text-black text-xs rounded-md   p-2 ${isActive ? "bg-green-400" : "bg-red-400"} `}>{isActive ? "Starting Soon" : "Ended"}</p>
            </div>
            <div>
              <h1 className='font-mono text-black text-lg  '>{name}</h1>

            </div>

            <div className='flex flex-row  gap-2 bg-yellow-200 p-2 rounded-lg mt-2 text-center items-center justify-center'>
              <p className='font-mono text-black text-sm font-extrabold'>{date ? date : "Dates not Decalred"}</p>
              {/* <p className='font-mono text-black text-sm font-extrabold'>{event.event.time}</p> */}
            </div>

            <div className='flex flex-row mt-2'>
              <p className='font-mono text-black text-sm cursor-pointer '>
                <a href={locationUrl} className="font-mono"><LocationOnIcon />{locationName}</a></p>
            </div>

            <div className=' p-5 rounded-sm flex flex-col text-center gap-5'>
              <Link href={eventLink} passHref>

                {isCompleted ? <p className='font-mono text-black text-sm bg-slate-100 p-2 rounded-lg hover:bg-slate-500 hover:text-white'>Check out what happened</p> : (
                  <>
                    <Link href={eventLink} passHref>
                      <p className='font-mono text-black text-sm bg-slate-100 rounded-lg p-2 hover:bg-slate-500 hover:text-white'>{isActive ? "Know More" : "Coming Soon"}</p>
                    </Link>
                  </>
                )}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
