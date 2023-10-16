import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>First Post</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>{
            console.log(`script loaded correctly, window.FB has been populated`);
            window.fbAsyncInit = function() {
                FB.init({
                  appId            : 'your-app-id',
                  xfbml            : true,
                  version          : 'v18.0'
                });

                FB.login(function(response) {
                    if (response.authResponse) {
                     console.log('Welcome!  Fetching your information.... ');
                     FB.api('/me', function(response) {
                       console.log('Good to see you, ' + response.name + '.');
                     });
                    } else {
                     console.log('User cancelled login or did not fully authorize.');
                    }
                });
              };
              console.log(`${window.FB}`)
            }

        }
        
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      </Layout>
  );
}