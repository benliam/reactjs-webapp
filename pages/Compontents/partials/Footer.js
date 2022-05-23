import { BsArrowUpSquareFill } from "react-icons/bs";
import Link from 'next/link'
import SocialMediaDrop from '../assets/SocialMediaDrop'


function Footer(props) {

    const FooterOption = props.option

    return(
      <footer className="">
          <div className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center">
              <SocialMediaDrop/>
              <div className="copy">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserved</div><a style={{fontSize: 30}}  className="to-top" href="#" ><BsArrowUpSquareFill/></a>
            </div>
          </div>
    </footer>
    )
}

export default Footer