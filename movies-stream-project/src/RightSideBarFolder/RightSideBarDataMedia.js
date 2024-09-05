import React from "react";
import Appletv from '../images/Rectangle17.png'
import Disneytv from '../images/Rectangle 18.png'
import HBO from '../images/Rectangle 19.png'
import Hulu from '../images/Rectangle 20.png'
import Netflix from '../images/Rectangle 21.png'
import Prime from '../images/Rectangle 22.png'

export const RightSideBarDataMedia = [
    {
    title: "Apple TV",
    img: <img src={Appletv}/>,
    link:"/home",
    },
    {
        title: "Disney TV",
       img: <img src={Disneytv}/>,
        link:"/Disney",
    },
    {
        title: "HBO Max",
        img: <img src={HBO}/>,
        link:"/HBOMax",
    },
    {
        title: "Hulu",
        img: <img src={Hulu}/>,
        link:"/Hulu",
    },
    {
        title: "Netflix",
        img: <img src={Netflix}/>,
        link:"/Netflix",
    },
    {
        title: "Prime",
        img: <img src={Prime}/>,
        
        link:"/Prime",
    },
]
    
 
