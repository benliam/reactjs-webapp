import Link from 'next/link'

// Navbar toggle component
import NavbarList from '../NavbarList'

function Header(props) {

    // set all option props a Options variable
    const Options = props.option

    // Header layout that definds does it have text white or not
    //const HeaderLayout = (Options.textWhite == 'true') ? "fixed-top text-white" : "fixed-top"
      
    
    return(
        <header className={`fixed-top ${Options}`}>
            <div className="navbar">
                <a className="navbar-brand" href="/">
                    <img src='/images/logos/benz-logo.png' placeholder="blur" className="default"  ></img>
                    <img src='/images/logos/benz-logo-white.png' className="inverted"  ></img>
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggle-label">Menu</span>
                    <span className="toggle-label-close">Close</span>
                    <span className="toggle-icon">
                    <span className="line" />
                    <span className="line" />
                    </span>
                </button>
                </div>
          <NavbarList />
      </header>     
    )
}

export default Header