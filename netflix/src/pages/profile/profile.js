import Footer from "../../components/footer/footer";

const Profile = () => {
    return(
        <div className="profile-container">
            <h1>MY PROFILE</h1>
            <div className="profile-details">
                <div className="profile-subtitles">
                    <p>Username</p>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Role</p>
                </div>
                <div className="profile-data">
                    <p>usernameExample</p>
                    <p>Name</p>
                    <p>Surname</p>
                    <p>Role</p>
                </div>
            </div>
            <button className="reset-password-btn">Reset password</button>
        </div>
    );
};

export default Profile;