
function FixedFooter(props) {

    const FooterOption = props.option

    return(
        <div>
        <footer className="fixed-bottom alt-footer">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 copy text-center">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserve</div>
            <div className="col-sm-3 text-right">
              <div className="social"><a className="trigger" href="#">{FooterOption}</a>
                <ul className="social-nav">
                  <li> <a target="_blank" href="#">YouTube</a></li>
                  <li> <a target="_blank" href="https://pinterest.com/benz.tattoodesign">Pinterest</a></li>
                  <li> <a target="_blank" href="https://instagram.com/benz.tattoodesign">Instagram</a></li>
                  <li> <a target="_blank" href="https://facebook.com/benz.tattoo.design">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}

export default FixedFooter