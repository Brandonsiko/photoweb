import React from "react"
import Mosnaps from "./Mosnaps.jpg"
import "./home.css"

const Home =()=>{
    return(
        <div  id="Background">
            <div className="WelcomeDisplay">
                    <div>
                        <img src={Mosnaps} alt="Mosnaps photograpy icon" id="MoSnaps_logo"/>
                        
                    </div>
                   
            </div>
           
        </div>
    )
}
export default Home