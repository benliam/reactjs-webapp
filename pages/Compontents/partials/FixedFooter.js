import Link from 'next/link'
import SocialMediaDrop from '../assets/SocialMediaDrop'

function FixedFooter(props) {

    return(
        <div>
        <footer className="fixed-bottom alt-footer">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 copy text-center">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserve</div>
            <div className="col-sm-3 text-right">
              <SocialMediaDrop/>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}

export default FixedFooter