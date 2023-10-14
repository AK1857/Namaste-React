import { Link } from "react-router-dom";

const Header=()=>{
    return(<div className="header">
            <div className="logo-container">
             <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
               </div>
            <div className="nave-items">
              <ul>
              <li><Link to="/">Home </Link></li>
              <li><Link to="/about">About </Link></li>

              <li><a href="/contact">contact us </a></li>
                <li>Cart</li>
              </ul>
              </div>
      </div>
      )
}

export default Header;