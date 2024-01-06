import logo from "../../assets/logo.png";

const Header = () => {
    return(
        <header>
            <div className="header-links">
                <a href="/profile">My Profile</a>
                <a href="#">Users overview</a>
            </div>
            <a href="/"><img className="header-logo" src={logo} /></a>
            <div className="header-buttons">
                <button className="login-button">Log in</button>
                <button className="logout-button">Log out</button>
            </div>
        </header>
    );
}

export default Header;