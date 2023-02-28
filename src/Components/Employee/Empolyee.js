import {React , useState} from 'react'
import "./Employee.css"
import {Link} from "react-router-dom"
import MoSnapPics from "./Weddings/menuItem"
import CarsPics from './Cars/Cars'
import PortraitPics from './Portraits/Portraits'
import ArtPics from './Artistic/Artistic'
import PersonalPics from './Animals/Animals'

const  Empolyee=()=> {
   const [ page,setPage ]=useState(1)
   const [ placeholderd,setPlaceholder ]=useState(0)
    const NextPage =()=>{
        
        setPage(page>4 ? 1:page+1)
    }
    const BackPage =()=>{
        setPage(page<2 ? 5:page-1)
    }
    const Weddings =()=>{
        setPage(1)
    }
    const Animals =()=>{
        setPage(2)
    }
    const Cars =()=>{
        setPage(3)
    }
    const Portraits =()=>{
        setPage(4)
    }
    const Artisitic =()=>{
        setPage(5)
    }
  
    const BackP =()=>{
        setPlaceholder(0)
    }

    const Enlarge=(event)=>{
      setPlaceholder(event.target.id);
}
   MoSnapPics.length=6;
   CarsPics.length=6;
   PortraitPics.length=6;
   ArtPics.length=6
   PersonalPics.length=6

   console.log(placeholderd)
 
    return (

        <div className="blackBackground">

            <br/>
                <hr/>
                    <h1>Mo Snaps Photography</h1>
                    <div>
               
           <ul className="CenterText ">
               <li onClick={Weddings} className="MPics">Beauty</li>
               <li onClick={Animals} className="MPics">Timeless</li>
               <li onClick={Cars} className="MPics">LOVE</li>
               <li onClick={Portraits} className="MPics">Portraits</li>
               <li onClick={Artisitic} className="MPics">Artisitic</li>
         </ul>
           </div>
                    <div className="GHigh">
                        {placeholderd>0 && page===1 ?
                           <div className="ZoomBox">
                                <div className="ZoomedPic1">
                      
                                    {placeholderd>0 ?
                                             <div className="ZoomedPic1">
                                             <button className="SNextBtn" onClick={BackP}>close</button>
                                             <img src={MoSnapPics[placeholderd-1].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                       
                                    </div>
                                    :null}
                                </div>
                       </div>:null}

                       {placeholderd>0 && page===2 ?
                           <div className="ZoomBox">
                                <div className="ZoomedPic1">
                      
                                    {placeholderd>0 ?
                                             <div className="ZoomedPic1">
                           <button className="SNextBtn" onClick={BackP}>close</button>
                           <img src={PersonalPics[placeholderd-201].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                       
                       </div>
                                    :null}
                                </div>
                       </div>:null}
                  
                       {placeholderd>0 && page===3 ?
                           <div className="ZoomBox">
                                <div className="ZoomedPic1">
                      
                                    {placeholderd>0 ?
                                             <div className="ZoomedPic1">
                           <button className="SNextBtn" onClick={BackP}>close</button>
                           <img src={CarsPics[placeholderd-301].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                       
                       </div>
                                    :null}
                                </div>
                       </div>:null}

                       {placeholderd>0 && page===4 ?
                           <div className="ZoomBox">
                                <div className="ZoomedPic1">
                      
                                    {placeholderd>0 ?
                                             <div className="ZoomedPic1">
                           <button className="SNextBtn" onClick={BackP}>close</button>
                           <img src={PortraitPics[placeholderd-401].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                       
                       </div>
                                    :null}
                                </div>
                       </div>:null}

                       {placeholderd>0 && page===5 ?
                           <div className="ZoomBox">
                                <div className="ZoomedPic1">
                      
                                    {placeholderd>0 ?
                                             <div className="ZoomedPic1">
                           <button className="SNextBtn" onClick={BackP}>close</button>
                           <img src={ArtPics[placeholderd-501].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                       
                       </div>
                                    :null}
                                </div>
                       </div>:null}





                   {page===1?<div className="ShadeBlock"  >
                   
                   {MoSnapPics.map((goat, nji)=>{
                       return(
                           <div className="ImageCatch" id={goat.placeHolder} onClick={Enlarge}>
                               
                               <img src={goat.image} key={nji} alt="my my my" className="MiniPic" id={goat.placeHolder} onClick={Enlarge}/>
                               </div>
                           ) })}
                           
                   </div>:null}

                   {page===2?<div className="ShadeBlock">
                   {PersonalPics.map((beauty, nji)=>{
                       return(
                           <div className="ImageCatch" id={beauty.placeholder} onClick={Enlarge}>
                               <img src={beauty.image} key={nji} alt="my my my" className="MiniPic" id={beauty.placeholder} onClick={Enlarge}/>
                               </div>
                           ) })}
                   </div>:null}

                   {page===3?<div className="ShadeBlock">
                   {CarsPics.map((car, numC)=>{
                       return(
                               <div className="ImageCatch" id={car.placeHolder} onClick={Enlarge}> 
                               <img src={car.image} key={numC} alt="my my my" className="MiniPic" id={car.placeHolder} onClick={Enlarge}/>
                               </div>
                           ) })}
                   </div>:null}

                   {page===4?<div className="ShadeBlock">
                   {PortraitPics.map((car, numC)=>{
                       return(
                               <div className="ImageCatch"id={car.placeHolder} onClick={Enlarge}> 
                               <img src={car.image} key={numC} alt="my my my" className="MiniPic" id={car.placeHolder} onClick={Enlarge}/>
                               </div>
                           ) })}
                    </div>:null}

                    {page===5?<div className="ShadeBlock">
                   {ArtPics.map((artP, numC)=>{
                       return(
                               <div className="ImageCatch" id={artP.placeHolder} onClick={Enlarge}> 
                             <img src={artP.image} key={numC} alt="my my my" className="MiniPic"id={artP.placeHolder} onClick={Enlarge}/>
                               </div>
                           ) })}
                   </div>:null}
               </div>
                    
                    
                    
                    <div className="flow" >{page>1&&page<6?<button onClick={BackPage} className="Secondary-btn">{page-1} Back</button>:null}<strong>{page}</strong>{page<5?<button className="Secondary-btn" onClick={NextPage}>{page+1} Next</button>:null}</div>
           <br/>  
                <hr/>
                    <div className="Dimond"></div>
                    <div className="Dimond D2"></div>
                    <div className="BookCard">
                <h3 className="Texted">How to get Photographed</h3>
                <div className="BookCardInner">
                <div className="SecondInnerCard">Get online on any social media platform
                    <br/>
                    <Link to="/contact" className="blueText">book here</Link>
                    <h4>01</h4></div>
                <div className="SecondInnerCard">Choose a date and book<h4>02</h4></div>
                <div className="SecondInnerCard">Enjoy an amazing photoshoot as I work<h4>03</h4></div>
                <div className="SecondInnerCard">Enjoy Your memories for a lifetime<h4>04</h4></div>
                </div>
            </div>
        </div>
    )  
}


export default Empolyee
