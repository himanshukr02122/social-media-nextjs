import 'bootstrap/dist/css/bootstrap.min.css'
import '/sass/style.scss'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'


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
