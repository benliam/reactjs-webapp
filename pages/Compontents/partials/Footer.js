import { BsArrowUpSquareFill } from "react-icons/bs";

function Footer(props) {

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
              <div className="copy">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserved</div><a style={{fontSize: 30}}  className="to-top" href="#" ><BsArrowUpSquareFill/></a>
            </div>
          </div>
    </footer>
    )
}

export default Footer