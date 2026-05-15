import { VscChromeClose } from "react-icons/vsc";
import RegistrationForm from './RegistrationForm'
import Clock from "../Clock";
function Account({ setAcc, user, setUserValues, setIsRegistered }) {

    return ( <div  className="outframe">
        <div className="modal">
            <button className='modal-close' onClick={() => setAcc(false)}><VscChromeClose /></button>
            {user ? (
                <div>
                    <h2>Hi, {user?.name || 'there'}!</h2>
                    <Clock />
                    <button onClick={() => {
                        setUserValues(null);
                        setIsRegistered(false);
                        setAcc(false);
                    }}>
                        Log Out
                    </button>
                </div>
            ) : (
                <div>
                    <div className='outframe'><div className='modal'><RegistrationForm setValues={setUserValues} setOp={setIsRegistered} /></div></div>
                </div>
            )}
        </div>
    </div> );
}

export default Account;
