import React from 'react'
import { useState } from 'react'
import "./SideB.css"
import Icon from "./Mosnaps.jpg"
import MenuIcon from "./menu.png" 
import { Link } from "react-router-dom"

const SideB =()=>{
const [clicked,setClicked]=useState(true);


const OpenWhenClicked =()=>{
    setClicked(prev=>!prev)
}




    return(
        <div className="white">
            <div className="NavBar">
                <a  href="/"><img src={Icon} alt="Moleboheng Mosnaps Logo Icon" id="Icon"/></a>
                <img src={MenuIcon} alt="Menu icon" id="MenuIcon" onClick={OpenWhenClicked}/>
                
               {clicked===false ? 
               <ul className="NavList">
                   
                <li><Link  to="/" onClick={OpenWhenClicked}>Home</Link></li>
                <br/>
                <li><Link to="/about" onClick={OpenWhenClicked}>About</Link></li>
                <br/>
                <li><Link to="/contact" onClick={OpenWhenClicked}>Contact</Link></li>
                <br/>
                <li><Link to="/gallery" onClick={OpenWhenClicked}>Gallery</Link></li>
                <br/>
                <li><Link to="/service" onClick={OpenWhenClicked}>Service</Link></li>
                <br/>
                
               </ul>
               :null}
               <ul className="NavList2">
                   
               <li><Link  to="/">Home</Link></li>
                <br/>
                <li><Link to="/about">About</Link></li>
                <br/>
                <li><Link to="/contact">Contact</Link></li>
                <br/>
                <li><Link to="/gallery">Gallery</Link></li>
                <br/>
                <li><Link to="/service">Service</Link></li>
                   <br/>
                   
                  </ul>
           </div>
        </div>
    )
}
export default SideB