
import { useUser } from '@auth0/nextjs-auth0/client';
import CloseIcon from '@mui/icons-material/Close';
import SegmentIcon from '@mui/icons-material/Segment';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

async function CreateUser({ user }: any) {
    const res = await fetch('/api/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
}

function Navbar() {
    const [showMenu, setshowMenu] = useState(false)
    const [open, setOpen] = useState(false)
    const { user } = useUser();

    if (user) {
        console.log("user is logged in")
        CreateUser({ user })
    }

    const toogleMenu = () => {
        const menu = document.querySelector('#menu-list')
        menu?.classList.toggle('hidden')
        setOpen(!open)
    }

    // create a function which changes the setshowmenu to its opposite value
    function toggleUserMenuActive() {
        setshowMenu(!showMenu);
    }

    return (
        <>
            <section className='sticky top-0 z-50 shadow-slate-200 border-b-2'>
                <div className="bg-black bg-opacity-90   sticky top-0 z-50 flex justify-center">
                    <div className='lg:flex container   flex-row justify-between  items-center  lg:mx-24 mx-auto  py-2  shadow-sm  bg-opacity-100   sticky top-0  text-white z-50 '>
                        <div className="flex flex-row justify-between">
                            <div className='inline '>
                                <Link href='/' passHref>
                                    <div className=' flex  justify-center items-center'>
                                        <Image src="/images/gdsc_nav_logo.png" alt='gdsc logo' width={50} height={50} />
                                        <span id="jis--university" className='  font-mono font-semibold text-2xl  text-white'>JIS University</span>
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
                            <ul className='flex lg:flex-row lg:justify-end lg:opacity-100 opacity-100 text-center items-center lg:gap-2 gap-4 flex-col lg:min-h-fit min-h-screen  p-10 sm:flex   lg:py-0  lg:pl-0 lg:px-0 '>
                                <li onClick={toogleMenu}><Link href={'/'}  ><a href="#" className="nav-list   hover:font-semibold " >Home</a></Link></li>
                                <li onClick={toogleMenu}><Link href={'/event'} ><a href="#" className="nav-list   hover:font-semibold ">Events</a></Link></li>
                                <li onClick={toogleMenu}><Link href={'/blog'} ><a href="#" className="nav-list   hover:font-semibold ">Blogs</a></Link></li>
                                <li onClick={toogleMenu}><Link href={'/project'}><a href="#" className="nav-list   hover:font-semibold ">Projects</a></Link></li>
                                <li onClick={toogleMenu}><Link href={'/team'} ><a href="#" className="nav-list   hover:font-semibold ">Teams</a></Link></li>
                                <li onClick={toogleMenu}><Link href={'/contact'}  ><a href="#" className="nav-list   hover:font-semibold ">Join Us</a></Link></li>
                                <li className='nav-list lg:flex justify-center items-center !m-0 hidden lg:visible'>
                                    {
                                        user ? (
                                            <>
                                                <div className='relative flex-shrink-0'>
                                                    <div className='flex justify-center'>
                                                        <button
                                                            onMouseOver={toggleUserMenuActive}
                                                            onMouseOut={toggleUserMenuActive}
                                                            // onMouseLeave={toggleUserMenuActive}
                                                            type='button'
                                                            id='user-menu'
                                                            className=' text-gray-400 hover:bg-gray-800 flex shrink-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                                                            <span className='sr-only'>Open user menu</span>
                                                            <Image
                                                                loading='lazy'
                                                                src={user?.picture || ""}
                                                                alt={user?.nickname || " "}
                                                                width={40}
                                                                height={40}
                                                                className='rounded-full  object-cover ' />
                                                        </button>
                                                    </div>
                                                    {showMenu && (
                                                        <div role="menu" aria-orientation='vertical' aria-labelledby='user-menu'
                                                            className='absolute  right-0 mt-2 w-40 max-w-none origin-top-right rounded-md py-1 shadow-lg bg-gray-800 text-white ring-black z-[99999] focus:outline-none'>
                                                            <Link href='/dashboard' target='_blank'>
                                                                <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                                                                    DashBoard
                                                                </a>
                                                            </Link>
                                                            <Link href='/api/auth/logout' className='group'>
                                                                <a className='block  text-red-700 hover:bg-gray-700 px-4 py-2 text-sm"'>Logout</a>
                                                            </Link>

                                                        </div>
                                                    )}
                                                    <div className='md:hidden flex justify-center pt-2 items-center'>
                                                        <Link href={'/api/auth/logout'} passHref>
                                                            <div>
                                                                <button className='bg-red-700 p-2 rounded'>
                                                                    Logout
                                                                </button>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                            : (
                                                <Link href={'/api/auth/login'} passHref>
                                                    <div>
                                                        <button
                                                            className='bg-green-700 p-2 rounded'
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                </Link>
                                            )
                                    }
                                </li>
                                <li onClick={toogleMenu}><Link href={'/contact'}  ><a href="#" className="nav-list lg:hidden  hover:font-semibold ">Dashboard</a></Link></li>
                                <li className='nav-list flex justify-center items-center !m-0 lg:hidden'>
                                    {
                                        user ? (
                                            <>
                                                <div className='flex justify-center gap-3 items-center'>
                                                    <button
                                                        type='button'
                                                        id='user-menu'
                                                        className=' text-gray-400 hover:bg-gray-800 flex shrink-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                                                        <Image
                                                            loading='lazy'
                                                            src={user?.picture || ""}
                                                            alt={user?.nickname || " "}
                                                            width={40}
                                                            height={40}
                                                            className='rounded-full  object-cover justify-center' />
                                                    </button>
                                                    <div className=' flex justify-center pt-2 items-center'>
                                                        <Link href={'/api/auth/logout'} passHref>
                                                            <div>
                                                                <button className='bg-red-700 p-2 rounded'>
                                                                    Logout
                                                                </button>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                            : (
                                                <Link href={'/api/auth/login'} passHref>
                                                    <div>
                                                        <button
                                                            className='bg-green-700 p-2 rounded'
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                </Link>
                                            )
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar