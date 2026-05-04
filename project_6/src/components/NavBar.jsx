import logo from '../assets/logo.svg';
function NavBar({isReg, setIsReg}) {

    


    return (
        <nav className="nav">
            <img src={logo} alt="Logo" className="logo" />

            <ul className="nav_ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>

            
            <button className="sinup" onClick={() => setIsReg(true)}>
                <span className="sinup-text">Sign Up</span>
            </button>
        </nav>
    );
}

export default NavBar;