import React from 'react'
import Instagram from "./Instagram_icon.png"
import Whatsapp from "./whatsapp.png"
import Facebook from "./facebook.png"
import "./LastSection.css"

const LastSection=()=> {
    return (
        <div className="Display FLast">
            <br/>
           <div className="Socials">
            <a href="https://www.instagram.com/leebow_monye" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram handle" id="Insta"/></a>
            <a href="https://www.facebook.com/MoSnap-Photography-581124169244851" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook page"/></a>
            <a href="https://api.whatsapp.com/send?phone=27824981918" id="Wapp" ><img src={Whatsapp} alt=""className="WGp"></img></a>
           </div>
           <br/>
           <p className="CopyRight">All pictures used are subject to copyright and persons may face legal action</p>
           <div><h5 className="CopyRight">&copy;2021 copyright All Rights Reserved || built by blackbow.co.za</h5> </div>
        </div>
    )
}

export default LastSection
