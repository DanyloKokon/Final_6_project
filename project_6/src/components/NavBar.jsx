import logo from '../assets/logo.svg';
import { VscGithub } from "react-icons/vsc";

function NavBar({ isReg, setIsReg, user, acc }) {




    return (
        <nav className="nav">
            <img src={logo} alt="Logo" className="logo" />

            <ul className="nav_ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
               
            </ul>


            {user === null && <button className="sinup" onClick={() => setIsReg(true)}>
                <span className="sinup-text">Sign Up</span>
            </button>}
          
            {user !== null && <p className='name-user'>Hi {user.name}</p>}
            {user !== null && <VscGithub className='user-pfp' />}
        </nav>
    );
}

export default NavBar;