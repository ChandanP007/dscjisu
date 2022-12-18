import Head from "next/head";
import MainHeader from "../../codefest/layout/MainHeader";
import WhyCodeFest from "../../codefest/layout/WhyCodeFest";

import About from "../../codefest/layout/About";
import Mission from "../../codefest/layout/Mission";
import Sponsor from "../../codefest/layout/Sponsor";
import Team from "../../codefest/layout/Team";

export default function CodeFest() {
    return (
        <>
            <Head>
                <title>Codefest 2023</title>
            </Head>
            <main className="min-h-screen bg-black">
                <MainHeader />
                <WhyCodeFest />
                <About />
                <Sponsor />
                <Mission />
                <Team />
            </main>

        </>
    );
}