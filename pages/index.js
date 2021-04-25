import Head from 'next/head'
import Sidebar from '../component/Sidebar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/whatsapp.ico" />
      </Head>
      <Sidebar />
    </div>
  )
}
