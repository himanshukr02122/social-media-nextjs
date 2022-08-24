import 'bootstrap/dist/css/bootstrap.css'
import '/sass/style.scss'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
// import useSWR from 'swr'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        <title>social media</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )

}

export default MyApp
