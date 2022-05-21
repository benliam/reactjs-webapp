import { BsArrowUpSquareFill } from "react-icons/bs";
import Link from 'next/link'
function Footer(props) {

    const FooterOption = props.option

    return(
      <footer className="">
          <div className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="social"><a className="trigger" href="#">Follow</a>
                <ul className="social-nav">
                  <li> <Link passHref={true}  href="#">YouTube</Link></li>
                  <li> <Link passHref={true}  href="https://pinterest.com/benz.tattoodesign">Pinterest</Link></li>
                  <li> <Link passHref={true} href="https://instagram.com/benz.tattoodesign">Instagram</Link></li>
                  <li> <Link passHref={true} href="https://facebook.com/benz.tattoo.design">Facebook</Link></li>
                </ul>
              </div>
              <div className="copy">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserved</div><a style={{fontSize: 30}}  className="to-top" href="#" ><BsArrowUpSquareFill/></a>
            </div>
          </div>
    </footer>
    )
}

export default Footer