import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';


export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log(`script loaded correctly, windows.FB has been populated`)}
                />

            </Head>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </>
    );
}