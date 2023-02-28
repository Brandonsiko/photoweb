import React, {useState} from 'react'
import "./GalleryPage.css"
import PersonalPics from '../Components/Employee/Animals/Animals'
import ArtPics from '../Components/Employee/Artistic/Artistic'
import MoSnapPics from '../Components/Employee/Weddings/menuItem'
import CarsPics from '../Components/Employee/Cars/Cars'
import PortraitPics from '../Components/Employee/Portraits/Portraits'
const GalleryPage=()=> {


    PersonalPics.length=10
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
    
    return (
        <div className="GalleryMainContainer">
            <h2 className="Texed">MoSnap Portfolio</h2>
             <div >
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
                            {placeholderd>0 && page===1?
                            <div className="ZoomCatcher">
                                 
                            <div className="ZoomedPic">
                               
                            {placeholderd>0 ?
                                <div className="ZoomedPic">
                                    <button className="SNextBtn" onClick={BackP}>close</button>
                                    <img src={MoSnapPics[placeholderd-1].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                                
                                </div>
                            :null}
                            </div>
                            </div>:null}

                            {placeholderd>0 &&page===5?<div> <div className="ZoomCatcher">
                            <div className="ZoomedPic">
                            {placeholderd>0 ?
                                <div className="ZoomedPic">
                                    <button className="SNextBtn" onClick={BackP}>close</button>
                                    <img src={ArtPics[placeholderd-501].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                                
                                </div>
                            :null}
                            </div>
                            </div></div>:null}

                            {placeholderd>0 &&page===4?<div> <div className="ZoomCatcher">
                            <div className="ZoomedPic">
                            {placeholderd>0 ?
                                <div className="ZoomedPic">
                                    <button className="SNextBtn" onClick={BackP}>close</button>
                                    <img src={PortraitPics[placeholderd-401].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                                
                                </div>
                            :null}
                            </div>
                            </div></div>:null}

                            {placeholderd>0 &&page===3?<div> <div className="ZoomCatcher">
                            <div className="ZoomedPic">
                            {placeholderd>0 ?
                                <div className="ZoomedPic">
                                    <button className="SNextBtn" onClick={BackP}>close</button>
                                    <img src={CarsPics[placeholderd-301].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                                
                                </div>
                            :null}
                            </div>
                            </div></div>:null}

                            {placeholderd>0 &&page===2?<div> <div className="ZoomCatcher">
                            <div className="ZoomedPic">
                            {placeholderd>0 ?
                                <div className="ZoomedPic">
                                    <button className="SNextBtn" onClick={BackP}>close</button>
                                    <img src={PersonalPics[placeholderd-201].image} className="MiniPic" alt="MoSnap Photography weddings and artistic photos"/>
                                
                                </div>
                            :null}
                            </div>
                            </div></div>:null}


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
                    </div>
        </div>
    )
}
export default GalleryPage