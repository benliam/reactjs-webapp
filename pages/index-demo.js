// Page needed libraries
import Head from 'next/head'

// Import core layout
import Layout from './Compontents/Layout';


function Home() {
  return (
    <Layout title="Trang chủ" header="" footer="">
      <main>
      <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
        <div className="container-fluid py-6 text-center">
          <h6 className="in-left">Trang chủ</h6>
          <h1 className="in-top">Welcome to Page</h1>
        </div>
      </div>
    </main>
    </Layout>
  )
}

export default Home