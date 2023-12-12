import logo from "../../assets/bigLogo.png";

const Login = ()  => {
    return (
        <div className="login-container">
            <img id="logo" src={logo} height="133" width="440.04"/>
            <form>
                <div className="form-line">
                    <label for="username">Username</label>
                    <input type="text" id="username" className="login-input" name="username" required/>
                </div>
                <div className="form-line">    
                    <label for="password">Password</label>
                    <input type="password" id="password" className="login-input" name="password" required/>
                </div>
                <button type="submit" id="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;