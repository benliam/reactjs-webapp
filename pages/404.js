// Import core layout
import Layout from './Compontents/Layout';

function PageNotFound() {
  return (
    <>
    <Layout title="Page Not Found"  header="default" footer="fixed">
    <main>
      <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
        <div className="container-fluid py-6 text-center">
          <h6 className="in-left">Error 404</h6>
          <h1 className="in-top">Page not found</h1>
        </div>
      </div>
    </main>
    </Layout>
  </>
  )
}

export default PageNotFound