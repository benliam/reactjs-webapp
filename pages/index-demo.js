// Page needed libraries
import Head from 'next/head'

// Import core layout
import Layout from './Compontents/Layout';


function Home() {
  return (
    <Layout title="Trang chủ" header="text-white" footer="">
      <main>
      <section className="pt-0">
  <div className="jumbotron jumbotron-fluid vh-50 d-flex align-items-center bg-dark text-white">
    <div
      className="bg o-7"
      style={{ backgroundImage: "url(images/blog-hero.jpg)" }}
    />
    <div className="container text-center">
      <h5 className="in-left">Inside story</h5>
      <h1 className="in-top">The Art of One Monk</h1>
    </div>
  </div>
  <div className="container py-6">
    <div className="row">
      <div className="offset-sm-2 col-sm-8">
        <h3>Gravity Invulnerability</h3>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
        <img
          className="img-fluid w-100 my-4"
          alt="Neoto - Creative Studio Portfolio Template"
          src="images/blog1.jpg"
        />
        <h3>An unobstrusive approach</h3>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>
    </div>
  </div>
  <div className="container py-6">
    <div className="row justify-content-md-center">
      <div className="col-sm-6">
        <h4 className="mb-4">Comment on this post</h4>
        <form className="mb-n5">
          <div className="form-group">
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              rows={8}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="container py-6">
    <div className="row justify-content-md-center">
      <div className="col-sm-6">
        <h4 className="mb-4">Comments</h4>
        <div className="media">
          <img className="mr-3" src="images/profile1.png" alt="..." />
          <div className="media-body">
            <h6 className="mt-2">September 4, 2021 at 1.13PM</h6>
            <h5 className="mt-0">Dan Howard</h5>
            <p>
              Props to this article! In gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin.
            </p>
            <div className="media mt-3">
              <img className="mr-3" src="images/profile2.png" alt="..." />
              <div className="media-body">
                <h6 className="mt-2">November 7, 2021 at 1.37PM</h6>
                <h5 className="mt-0">Stella Anderson</h5>
                <p>
                  <strong>@Dan Howard</strong> Agreed!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="media mt-5">
          <img className="mr-3" src="images/profile3.png" alt="..." />
          <div className="media-body">
            <h6 className="mt-2">October 15, 2021 at 3.33PM</h6>
            <h5 className="mt-0">Bryan Munich</h5>
            <p>
              Seems to be the best yet, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis.
            </p>
          </div>
        </div>
        <div className="media mt-5">
          <img className="mr-3" src="images/profile4.png" alt="..." />
          <div className="media-body">
            <h6 className="mt-2">October 27, 2021 at 7.40AM</h6>
            <h5 className="mt-0">Chris Brandon</h5>
            <p>
              I like the part where in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
    </Layout>
  )
}

export default Home