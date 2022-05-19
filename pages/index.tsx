import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <main className="w-full min-h-screen bg-gray-100">
			<Header/>
			<Main />
		</main>		
    </div>
  )
}

export default Home
