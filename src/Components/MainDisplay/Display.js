import React from 'react'
import "./Display.css"
import LeboArt from "./camera.webp"
import Wedding from "./demo (5).jpg"
import Portrait from "./demo (3).jpg"
import Fashion from "./demo (4).jpg"
import Artistic from "./demo (2).jpg"

const Display = () => {
    return (
        <div className="Display">
          
          <img src={LeboArt} alt="lekwd" id="LA"/>
          
            <article className="CenterText">Photography has been a way to express my feelings and to showchase my work and skills in how I view the world!</article>
          <br/>
          <div className="IntroWrap">
            <div className="Card">
              <h3>Personal Photography</h3>
              <div className="CardContainer">
              <img src={Wedding} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              </div>
              <div className="CardText">Capture Beautiful moments of you and those who matter most!</div>
              <button>View More</button>
            </div>
            <div className="Card">
              <h3>Portrait Photography</h3>
              <img src={Portrait} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Have Your Portrait Taken And Always remember your Beautiful self!</div>
              <button>View More</button>
            </div>
            <div className="Card">
              <h3>Artisitic Photography</h3>
              <img src={Fashion} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Capture the Artisitic side you know you have and let us make Art!</div>
              <button>View More</button>
            </div>
            <div className="Card">
              <h3>Timeless Photography</h3>
              <img src={Artistic} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Capture Beautiful moments of your everyday life!</div>
              <button>View More</button>
            </div>
          </div>
          <br/>
        </div>
    )
}

export default Display
