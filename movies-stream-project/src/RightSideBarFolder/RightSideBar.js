import { useState } from "react";
import '../index.css'
import { RightSideBarDataMedia } from "./RightSideBarDataMedia";
import { RightSideBarDataGenre } from "./RightSideBarDataGenre";
const RightSideBar = () => {
    return (
        <div className="rightsidebar">
            <div className="Media">
            <h2>Media Service</h2>
            <ul className="MediaRightSideBarList">
                {RightSideBarDataMedia.map((val, key) => {
                    return <li key={key} className="row">
                        <div className="media-service-content" style={{padding: '8px'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'4px'}}>
                                {val.img}
                                {val.title}
                            </div>
                        </div>
                    </li>

                }
                )}
            </ul>
            </div>
            <div className="Genre">
            <h2>Genre</h2>
            <ul className="GenreRightSideBarList">
                {RightSideBarDataGenre.map((val, key) => {
                    return <li key={key} className="row">
                        <div>
                            {val.button}
                        </div>
                    </li>

                }
                )}
            </ul>
            </div>
        </div>

    );
}

export default RightSideBar;