import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Eshcol Ventures Ltd </title>
        <meta name="viewport" content="initial-scale=0.8, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

    {/* header  Compoent*/}
    <Header />

    {/* main */}
    <MainSection />

    {/* footer Component */}
    <Footer />
    

    </div>
  )
}
