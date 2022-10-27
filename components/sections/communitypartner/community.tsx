import Image from 'next/image';
import { useEffect, useState } from 'react';

function Community() {
    const [CommunityPartner, setCommunityPartner] = useState([]);
    // fetch data from url
    useEffect(() => {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=UdQ51XOhp1y5UWFlXfYK0ifBD_n9jbCb8ql4VsP7Cu7NUl2_xI6mVvyPIqA5KP-tj_gsKN1AMUpvsCegYofQJ83djfNabwlhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnALHsilyM4VZRtBdwzF9t9Yqh0vdAvykUdpnCcsI94OvAKOl1zbALLq0qNVzUZmlPl-H-fjKGVozpsglMonMIWaLwCe18G6pfdz9Jw9Md8uu&lib=MfNGTPEdViWry00pYnDxJU2odFU99YuIM')
            .then(response => response.json()).then(user => {
                setCommunityPartner(user.data);
            }).catch(error => {
                console.log(error);
            }
            );
    }, [])


    return (
        <div className='lg:p-20 sm:p-2 bg-white flex  flex-col text-center dark:bg-[#182232] py-10'>
            <h1 className='lg:text-6xl text-3xl dark:text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Community</span> Partner</h1>
            <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                Thanks to our community partners, who helped us  provide a better experience to our students.
            </p>
            <div className='grid  lg:grid-flow-col  grid-flow-row   justify-center place-items-center p-10 gap-5'>
                {
                    CommunityPartner?.map((partner) => {
                        return (
                            <div className='dark:bg-slate-600 bg-slate-100 rounded-lg p-10  hover:scale-105 transition-all duration-1000' key={partner.id} title={partner.description}>
                                <Image src={partner.image} alt={partner.name} className='rounded-xl  h-20 hover:scale-150 transition-all duration-1000' height={80} width={80} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Community