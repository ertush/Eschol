import Head from 'next/head'
import Header from '../components/Header'
import MainSection from '../components/MainSection'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Eschol Ventures</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

    {/* header  Compoent*/}
    <Header />

    {/* main */}
    <MainSection />

    {/* footer Component */}
    

    </div>
  )
}
