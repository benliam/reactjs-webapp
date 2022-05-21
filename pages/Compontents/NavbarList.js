import MenuList from '../../utils/Menu'

const RenderMenu = () => MenuList.map((value, key) => {
    if(value.child == null) {
        return <li key={key} className="nav-item active"><a className="nav-link" href={value.href}>{value.name}</a></li>;
    }
    else {
        return     <li className="nav-item dropdown" key={key}>
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" >{value.name}</a>
                    <div className="dropdown-menu">
                        {value.child.map((data, index) => {
                           return  <a className="dropdown-item" href={data.href} key={index}>{data.name}</a>
                        })}
                    </div>
                </li>
    }
  });

function NavbarList(){
    return (
        <ul id="nav">
            <RenderMenu/>
        </ul>
    )
}

export default NavbarList;