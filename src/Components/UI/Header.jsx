import { NavLink, useRouteError } from "react-router-dom"

const Header = () => {
   return (
    <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <NavLink to="/">
                    <li>WorldAtlas</li>
                    </NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/country">Country</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
   )
}

export default Header