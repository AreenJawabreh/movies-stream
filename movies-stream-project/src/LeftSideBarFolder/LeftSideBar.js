import { LeftSideBarData } from "./LeftSideBarData";
import profileimage from '../images/Ellipse 1.png';
import circleImage1 from '../images/Ellipse 8.png';  
import circleImage2 from '../images/Ellipse 9.png';  
import circleImage3 from '../images/Ellipse 10.png';  
import { TbLogout } from "react-icons/tb";
import { RxSwitch } from "react-icons/rx";
import React, { useState } from 'react';

 

const LeftSideBar = () => {
    const [showImages, setShowImages] = useState(false);

    const toggleImages = () => {
        setShowImages(prevState => !prevState);
    };
    return ( 
        <div className="Leftsidebar">
            <img src={profileimage} alt="Profile" style={{ marginBottom: '20px' }} />

            <ul className="LeftSideBarIcons" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {LeftSideBarData.map((val, key) => {
                    return (
                        <li key={key} className="leftSideBarRow" style={{ marginBottom: '10px' }}>
                            <div style={{ fontSize: '24px' }}>
                                {val.icon}
                            </div>
                        </li>
                    );
                })}
            </ul>

            <div className="circle-border-container" >
                <div className="circle-container">
                    <div className="circle" >
                        <img src={circleImage1} alt="Circle 1"  />
                    </div>
                    <div className="circle" >
                        <img src={circleImage2} alt="Circle 2" />
                    </div>
                    <div className="circle">
                        <img src={circleImage3} alt="Circle 3"  />
                    </div>
                </div>
            </div>

            <div className="plus-circle" onClick={toggleImages}>
                +
            </div>

            <div className="icon-container" >
                <div className="switch-icon ">
                    <RxSwitch />
                </div>
                <div className="logout-icon" >
                    
                    <TbLogout/>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
