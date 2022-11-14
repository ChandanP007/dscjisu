import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar } from '@mui/material';

export interface ITeamCard {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  twitter: string;
  github: string;
  tagline: string;
}

const TeamCard: React.FC<ITeamCard> = ({ github, id, image, name, linkedin, role, tagline, twitter }) => {
  return (
    <>
      <div className=' m-5 p-5 h-[450px] w-[420px]    bg-shadow-2xl  dark:shadow-grey-400    rounded-xl   transition-all duration-200 ease-in  hover:scale-105  '
        key={id} title={
          name + " " + role + " " + tagline
        } >
        <div className='flex justify-center pt-5 pb-1  rounded-lg'>
          <Avatar src={image} alt={name} sx={{ width: 190, height: 190 }} className={`z-[0] shadow-lg border-4 border-cyan-200 people-card--avatar`} />
        </div>
        <div className="p-5 font-mono text-white">
          <h1 className='text-3xl text-center font-mono text-clip'>{name}</h1>
          <div className="flex flex-row text-center justify-center gap-2 pb-4">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className='text-center text-blue-900 hover:text-blue-500'>
              <LinkedInIcon />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className='text-center text-violet-700 hover:text-violet-500'>
              <GitHubIcon />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer" className='text-center text-blue-700 hover:text-blue-500'>
              <TwitterIcon />
            </a>
          </div>
          <h3 className='text-center text-xl p-2 underline underline-offset-4 decoration-yellow-800 decoration-underline' title={role}>{role}</h3>
          <h2 className='text-center text-lg  font-thin font-sans'>{tagline}</h2>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
