import React from 'react'
import "./About.css"
import LeboM from "./Moleboheng.jpg"

 const  About=()=> {

    return (
        <div className="b">
            <hr/>
            <div className="Card AlignSpace">
                <img src={LeboM} alt="MoSnap Owner!" className="AboutPic"/>
                <div>
                <label className="CenterText AbM">About Me</label>
                <br/>
                <br/>
                <label className="Signature">MoSnap's photographer</label>
                    <div>
                        
                        <button className="SpecialBtn" ><a href="https://www.instagram.com/leebow_monye " target="_blank" rel="noreferrer" className="black">View More</a></button>
                    </div>
                </div>
               
            </div>
            <div className="SpaceEvenly"><div className="line"/>
            <div className="downLine"/></div>
            
            <hr/>
            <div className="AboutCard purple" >
                <article>&ldquo; I am passionate photographer, who loves to take imaculant and beautiful pictures of my mediate surrounding!</article>
                <p>I pride myself in my work to give quality memories ,Life is beautiful and its ment ti be enjoyed that's where i come in by capturing memorable pictures</p>
                <article>Aside from taking pictures I love spending time with Family. Hanging with My friends and going out!</article>
                <br/>
                <article>Make beautiful memories you and the lense&rdquo;</article>
            </div>
        </div>
    )
}


export default About