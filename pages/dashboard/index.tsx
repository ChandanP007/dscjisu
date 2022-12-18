import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from "next/head";
import Image from "next/image";
// import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

export const getServerSideProps = withPageAuthRequired();

// id: string;
// name: string;
// email: string;
// sub: string;
// linkedin: string;
// github: string;
// tagline: string;
// image: string;
// event_registered: IEvent[];




export default function Dashboard({ user }: any) {

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(user);
    const [qrCode, setQrCode] = useState("");
    // console.log(user);




    useEffect(() => {

        async function fetchUser() {
            const res = await fetch('/api/user/getuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sub: user?.sub }),
            });
            const data = await res.json();
            console.log(data);
            setUserData(data.data);
            setLoading(false);
            console.log("The data from mongodb atlas : " + userData);
        }

        fetchUser();
    }, [user])



    return (
        <>
            <Head>
                <title>{userData?.name}</title>
            </Head>
            <div className='lg:p-20 sm:p-2  flex  flex-col min-h-screen  bg-slate-900 py-10'>
                <div className="text-center">
                    <Image
                        src={user?.picture ? user.picture : '/images/undraw_profile_pic_ic5t.svg'}
                        alt={user?.name ? user.name : 'Profile Picture'}
                        width={150}
                        height={150}
                        className='rounded-full p-2'
                    />
                    <h1 className="text-xl text-white">{user?.name}</h1>
                </div>

                <div className='flex justify-center pt-5'>
                    <pre className='bg-slate-800 rounded p-2 text-white'>
                        {JSON.stringify(userData, null, 2)}
                    </pre>
                </div>
            </div>
        </>
    )

}