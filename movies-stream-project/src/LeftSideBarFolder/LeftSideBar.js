import { LeftSideBarData } from "./LeftSideBarData";
import profileimage from '../images/Ellipse 1.png';
import circleImage1 from '../images/Ellipse 8.png';  
import circleImage2 from '../images/Ellipse 9.png';  
import circleImage3 from '../images/Ellipse 10.png';  
import { TbLogout } from "react-icons/tb";
import { RxSwitch } from "react-icons/rx";

const LeftSideBar = () => {
    return ( 
        <div className="Leftsidebar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

            <div className="circle-border-container" style={{ padding: '10px', border: '2px solid #1d1d1d', borderRadius: '30px', marginTop: '20px' }}>
                <div className="circle-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <div className="circle" style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                        <img src={circleImage1} alt="Circle 1" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="circle" style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                        <img src={circleImage2} alt="Circle 2" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="circle" style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                        <img src={circleImage3} alt="Circle 3" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>

            <div className="plus-circle" style={{ marginTop: '15px', width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #FFA41C', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#FFA41C' }}>
                +
            </div>

            <div className="icon-container" style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
                <div className="icon">
                    <RxSwitch style={{ color: '#FFA41C', fontSize: '40px' }}/>
                </div>
                <div className="icon" >
                    
                    <TbLogout style={{ color: 'red', fontSize: '40px' }}/>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
