// Page needed libraries
import Head from 'next/head'

// Import core layout
import Layout from './Compontents/Layout';


function Home() {
  return (
    <Layout title="Trang chủ" header="text-white" footer="">
      <main>
      Hello world!
    </main>
    </Layout>
  )
}

export default Home