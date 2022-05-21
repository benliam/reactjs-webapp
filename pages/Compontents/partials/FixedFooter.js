import Link from 'next/link'

function FixedFooter(props) {

    return(
        <div>
        <footer className="fixed-bottom alt-footer">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 copy text-center">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserve</div>
            <div className="col-sm-3 text-right">2
              <div className="social"><a className="trigger" href="#">Follow</a>
                <ul className="social-nav">
                  <li> <Link passHref={true}  href="#">YouTube</Link></li>
                  <li> <Link passHref={true}  href="https://pinterest.com/benz.tattoodesign">Pinterest</Link></li>
                  <li> <Link passHref={true} href="https://instagram.com/benz.tattoodesign">Instagram</Link></li>
                  <li> <Link passHref={true} href="https://facebook.com/benz.tattoo.design">Facebook</Link></li>
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