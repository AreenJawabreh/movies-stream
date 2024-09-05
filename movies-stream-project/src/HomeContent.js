import React from 'react';
import { BsPlay } from "react-icons/bs";
import squid_game from './images/Rectangle 7.png';
import tomethy from './images/Rectangle 8.png';
import shrek from './images/Rectangle 11.png';
import riverdale from './images/Rectangle 12.png';
import tallgirl from './images/Rectangle 13.png';
import { BsFire } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';


const HomeContent = () => {
    return (
        <div className="home-content" >
            <div className="home-content1">
                <div className="image-container">
                <div className="overlay-content-top-squid-game">#1 in series <BsFire style={{color:'#FFA41C'}}/></div>
                    <img src={squid_game} className="image" alt="Squid Game" />
                    <div className="overlay-content">Squid Game <br />2021</div>
                </div>
                <div className="image-container">
                <div className="overlay-content-top"><BsStarFill/>4.2</div>
                    <img src={tomethy} className="image" alt="Dune" />
                    <div className="overlay-content">Dune <br />2021</div>
                </div>
            </div>

            <div className="home-content2" style={{ display: 'flex' }}>
                <div className="left-section" style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 2 }}>
                    <div className="continue-watching" style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
                        <h2>Continue Watching</h2>
                        <h2 style={{ fontWeight: '300' }}>3 Movies Remaining</h2>
                        <button style={{ backgroundColor: '#151515', color: '#FFA41C', borderRadius: '6px', margin: 0 }}>See More</button>
                    </div>
                    <div className="continu-watching-images" style={{ display: 'flex' }}>
                        <div className="image-container" style={{ width: '50%', paddingRight: '10px' }}>
                            <img src={shrek} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="Shrek" />
                            <div className="overlay-content-below">
                                Shrek 3 2022 <BsPlay style={{ marginLeft: '50%', fontSize: '25px', color: '#FFA41C' }} />
                            </div>
                        </div>
                        <div className="image-container" style={{ width: '50%' }}>
                            <img src={riverdale} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="Riverdale" />
                            <div className="overlay-content-below">
                                Riverdale 2 2019 <BsPlay style={{ marginLeft: '40%', fontSize: '25px', color: '#FFA41C' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-image22" style={{ padding: '20px', flex: 1 }}>
                    <img src={tallgirl} style={{ width: '100%', height: '75%' }} alt="Tall Girl" />
                </div>
            </div>
        </div>
    );
}

export default HomeContent;
