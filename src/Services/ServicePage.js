import React, { useState } from 'react'
import CarsPics from '../Components/Employee/Cars/Cars'
import menuitem from "../Components/Employee/Weddings/menuItem"
import AB from "./AB.jpg"
import "./ServicePage.css"
import ArtPics from '../Components/Employee/Artistic/Artistic'


export default function ServicePage() {

const [fItem ,setFItem]=useState(1)

const Item1 =()=>{
    setFItem(1)
}
const Item2 =()=>{
    setFItem(2)
}
const Item3 =()=>{
    setFItem(3)
}
const Item4 =()=>{
    setFItem(4)
}
const Item5 =()=>{
    setFItem(5);
}
const Item6 =()=>{
    setFItem(6);
}



    return (
        <div className="ServicePage">
             <div >
                 <ul className="DropContainer">
                     <li onClick={Item1}>Graduation Photography</li>
                     <li onClick={Item2}>Wedding Photography</li>
                     <li onClick={Item3}>Baby Shower Snaps</li>
                     <li onClick={Item4}>Portraits</li>
                     <li onClick={Item5} >Couple Photography</li>
                    <li onClick={Item6} >Food Photography</li>
                    
                 </ul>
             </div>
            
             <div className="ServiceData">
                 {fItem===1?<div>
                     <h3>Graduation Photography</h3>
                     <article>A special person is Graduating soon and you'd like to capture their special day? We AT MoSnaps can be of assistance <br/>Be bold, be courageous, be your best! and let Mosnaps Take each and every moment of you making moves!<br/>
                     <br/>Remember if opportunity doesn't come, create a door and remember you've<strong> Kinged/Queened </strong>this far and you are destined for Greatness!
                     </article><br/>
                     <article>For More infromation visit our <a href="/contact" className="blackText">Contact Page</a> and get a qoute we'll be more than happy to get in touch</article>
                    <br/>
                    
                    <img src={CarsPics[0].image} alt="Graduation Photography"/>
                 </div>:null}
                 {fItem===2?<div>
                     <h3>Wedding Photography</h3>
                     <article>He's finally done it, asked you to spend the rest of your life with him and you said yes because you see no other like him and you've never been so sure about anything in your life!
                         <br/>
                         <br/>Let MoSnaps capture your beautiful day and your beautiful self with an all exclusive wedding Photography package that ensures your memories are never lost!
                     </article><br/>
                     <article>For More infromation visit our <a href="/contact" className="blackText">Contact Page</a> and get a qoute we'll be more than happy to get in touch</article>
                     <br/>
                     <img src={menuitem[1].image} alt="MoSnaps Wedding Photography"/>
                     </div>:null}
                 {fItem===3?<div>
                     <h3>Baby Shower Snaps</h3>
                     <article>That little tiny person is growing everyday in your stomach and its a matter of time till you are the most happiest in your life than you've been</article>
                     <br/>
                     <article>Let us at MoSnaps Capture your beautiful Moments We door in house Photography and Studio booked Photography depending on your interest and we make amazing moments just you the baby bump and the lence!</article>
                     <br/>
                     <article>For more infromation click here <a href="/contact" className="blackText">Contact Page</a> and get a quote we'll be more than happy to get in touch</article>
                     <br/>
                     <img src={AB} alt="Baby Shower Photography in and Around Pretoria"/>
                     </div>:null}
                 {fItem===4?<div>
                     <h3>Portraits</h3>
                     <article>If it was up to me, Everyday would be a photographic experience! you honestly don't need a reason to get you or your loved one a full on Photography Experience. Occation or Not let us at MoSnaps take beautiful pictures of you and your loved ones!</article>
                     <br/>
                     <article>We have an in studio for those profesional Snaps shots and we also do in house call for those who are studio shy or just have a prefrence for a specific place, feel or vibe!</article>
                     <br/>
                     <article>For more infromation click here <a href="/contact" className="blackText">Contact Page</a> and get a quote we'll be more than happy to get in touch</article>
                     <br/> <img src={ArtPics[1].image} alt="Artisitc Pictures"/></div>:null }
                 {fItem===5?<div>
                     <h3 >Studio Photoshoot</h3>
                     <article>The look and feel of your business is the first thing that people see when they are introduced to your business so branding is the one most important thing that attracts people to your business</article>
                     <br/>
                     <article>We have an in studio for those profesional Snaps shots and we can help in making sure your business looks good from a real and imaculant standpoint</article>
                     <br/>
                     <article>For more infromation click here <a href="/contact" className="blackText">Contact Page</a> and get a quote we'll be more than happy to get in touch</article>
                     <br/> <img src={ArtPics[0].image} alt="Artisitc Pictures"/></div>:null }
                 {fItem===6?<div>What's six again?</div>:null}
             </div>
        </div>
    )
}
