import Link from 'next/link'
import SocialMediaDrop from '../assets/SocialMediaDrop'

function ProjectFooter(props) {

    const FooterOption = props.option

    return(
      <footer className="">
          <div className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center">
            <SocialMediaDrop/>
              <div className="copy">2021 © Project </div><a className="to-top" href="#">^</a>
            </div>
          </div>
    </footer>
    )
}

export default ProjectFooter