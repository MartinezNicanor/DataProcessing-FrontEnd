import logo from "../../assets/logo.png";

const Header = () => {
    return(
        <header>
            <div className="header-links">
                <a href="#">My Profile</a>
                <a href="#">Users overview</a>
            </div>
            <img className="header-logo" src={logo} />
            <div className="header-buttons">
                <button className="login-button">Log in</button>
                <button className="logout-button">Log out</button>
            </div>
        </header>
    );
}

export default Header;