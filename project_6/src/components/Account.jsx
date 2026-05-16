import React, { useState, useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import RegistrationForm from './RegistrationForm'
import TiltedCard from './Bits/TiltedCards/TiltedCard';
import Clock from "../Clock";
function Account({ setAcc, user, setUserValues, setIsRegistered }) {

    const [pfp, setPfp] = useState(() => {
        const savedPfp = localStorage.getItem('pfp');
        return savedPfp ? JSON.parse(savedPfp) : null;
    });

    useEffect(() => {
        if (pfp) {
            localStorage.setItem('pfp', JSON.stringify(pfp));
        } else {
            localStorage.removeItem('pfp');
        }
    }, [pfp, user]);

    return (<div className="outframe">
        <div className="modal">
            <button className='modal-close' onClick={() => setAcc(false)}><VscChromeClose /></button>
            {user ? (
                <div>
                    <h2>Hi, {user?.name || 'there'}!</h2>
                    <Clock />
                    {pfp && <TiltedCard
                        imageSrc={pfp}
                        altText="Kendrick Lamar - GNX Album Cover"
                        captionText={`${user.name}'s pfp`}
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip
                        displayOverlayContent
                        overlayContent={
                            <p className="tilted-card-demo-text">
                                {user.name}
                            </p>
                        }

                    />}
                    {!pfp && <form action="submit" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        setPfp(formData.get("pfpUrl"));
                    }}><input className='inp-acc' type="text" name="pfpUrl" placeholder="Enter profile picture URL" /> <button className='inp-btn-acc' type="submit" >Upload</button></form>}
                    <button className="acc-btn" onClick={() => {
                        setUserValues(null);
                        setIsRegistered(false);
                        setAcc(false);
                        localStorage.removeItem('pfp');
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
    </div>);
}

export default Account;
