
import CloseIcon from '@mui/icons-material/Close';
import SegmentIcon from '@mui/icons-material/Segment';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';

function Navbar() {
    const [open, setOpen] = useState(false)


    const toogleMenu = () => {
        const menu = document.querySelector('#menu-list')
        menu?.classList.toggle('hidden')
        setOpen(!open)
    }

    return (
        <>
            <div className='lg:flex   flex-row justify-between  items-center  px-5 py-2  shadow-sm bg-black bg-opacity-90  shadow-slate-50  sticky top-0  bg-bg-dark text-white z-50 '>
                <div className="flex flex-row justify-between">
                    <div className='inline '>
                        <Link href='/' passHref>
                            <div className=' flex  justify-center items-center'>
                                <Image src="/images/gdsc_nav_logo.png" alt='gdsc logo' width={50} height={50} />
                                <span id="jis--university" className='text-black  font-mono font-semibold text-3xl  dark:text-white'>JIS University</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className=' lg:hidden text-4xl transition-all ease-in-out'>
                            {open ? <CloseIcon onClick={toogleMenu} className='cursor-pointer menu-options' /> : <SegmentIcon onClick={toogleMenu} className='cursor-pointer menu-options' />}
                        </span>
                    </div>
                </div>

                <div className="links bg-dark  lg:flex flex-row hidden justify-center items-center" id="menu-list">
                    <ul className='flex lg:flex-row lg:justify-end lg:opacity-100 opacity-100 text-center items-center gap-10 flex-col lg:min-h-fit min-h-screen  p-10 sm:flex   lg:py-0  lg:pl-0 '>
                        <li onClick={toogleMenu}><Link href={'/'}  ><a href="#" className="nav-list   hover:font-semibold " >Home</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/event'} ><a href="#" className="nav-list   hover:font-semibold ">Events</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/blog'} ><a href="#" className="nav-list   hover:font-semibold ">Blogs</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/project'}><a href="#" className="nav-list   hover:font-semibold ">Projects</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/team'} ><a href="#" className="nav-list   hover:font-semibold ">Teams</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/contact'}  ><a href="#" className="nav-list   hover:font-semibold ">Join Us</a></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar