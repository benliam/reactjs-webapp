
function ProjectFooter(props) {

    const FooterOption = props.option

    return(
      <footer className="">
          <div className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="social"><a className="trigger" href="#">Follow</a>
                <ul className="social-nav">
                  <li> <a href="https://instagram.com/benz.tattoodesign">Instagram</a></li>
                  <li> <a href="https://facebook.com/benz.tattoo.design">Facebook</a></li>
                  <li> <a href="https://pinterest.com/benz.tattoodesign">Pinterest</a></li>
                </ul>
              </div>
              <div className="copy">2021 © Project </div><a className="to-top" href="#">^</a>
            </div>
          </div>
    </footer>
    )
}

export default ProjectFooter