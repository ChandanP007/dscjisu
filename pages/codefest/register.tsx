import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Head from 'next/head';
import { useState } from 'react';


export const getServerSideProps = withPageAuthRequired();

export default function Register() {
    const { user } = useUser();
    const [checked, setChecked] = useState(false);
    const [response, setResponse] = useState('')


    const RegisterUser = async () => {
        const res = await fetch('/api/codefest/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user?.name,
                email: user?.email,
                sub: user?.sub,
                image: user?.picture,
                checked: checked
            })
        })
        const data = await res.json();
        setResponse(data.message)
        console.log(data);
    }


    return (
        <>
            <Head>
                <title>Register</title>

            </Head>
            <main className='bg-slate-900 min-h-screen'>
                <div className="flex flex-col justify-center lg:p-10 text-white">
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl lg:text-6xl'>CodeFest 2023</h1>
                        <p className='text-center text-sm lg:px-28'>
                            Codefest 2023 is the premier event for tech professionals and enthusiasts from around the world. Featuring the latest in tech trends, products, and services, the festival is the perfect place for companies to showcase their cutting-edge technologies and solutions.
                        </p>
                    </div>
                    <div className='grid grid-cols-5 gap-2 lg:p-10'>
                        <div className='col-span-5'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-2xl lg:text-4xl text-center font-mono'>Hello! {user?.name}</h1>
                                <p className='text-center lg:px-28'>
                                    Please fill in the form below to register for CodeFest 2023
                                </p>
                            </div>
                        </div>

                        <div className='col-span-5 justify-items-center'>
                            <div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='text-3xl lg:text-4xl font-mono'>Personal Details</h1>
                                    <pre className='lg:p-2 text-sm lg:visible hidden'>
                                        {JSON.stringify(user, null, 2)}
                                    </pre>
                                    <div className='flex flex-col gap-2 p-10'>
                                        <p>Name : {user?.name}</p>
                                        <p>Sub : {user?.sub}</p>
                                        <p>Email : {user?.email}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <FormGroup className='flex justify-center text-center'>
                                        <FormControlLabel control={<Checkbox
                                            onChange={(e) => {
                                                setChecked(e.target.checked)
                                            }
                                            }
                                            className='text-white'
                                        />} label="I agree to CodeFest 2023 code Of Conduct and all the rules and regulation" />
                                    </FormGroup>
                                </div>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <button
                                        disabled={!checked}
                                        onClick={() => {
                                            if (!checked) {
                                                return
                                            }
                                            RegisterUser()
                                            console.log("Register")
                                        }}
                                        className={` px-3 py-2 rounded ${checked ? "bg-green-400" : "bg-gray-800"}`}>
                                        Sign Up
                                    </button>
                                    {
                                        response && (
                                            <div className=''>
                                                <Alert
                                                    onClose={() => {
                                                        setResponse('')
                                                    }}
                                                    severity="success">{response}</Alert>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}