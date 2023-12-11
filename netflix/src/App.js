import './App.css';

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <ul className='header-links'>
            <li><a className='header-link' href="">My Profile</a></li>
            <li><a className='header-link' href="">Users Overview</a></li>
        </ul>
        <h1 className="logo">NETFLIX</h1>
        <div className='header-buttons'>
            <button>Log in</button>
            <button>Log out</button>
        </div>
      </header>
    </div>
  );
}

export default App;
