import React,{useState} from 'react'
import "./ContactPage.css"
// import emailjs from "emailjs"


const ContactPage=()=> {
const [Emails,setEmails]=useState("")
const [PlaceSearch,setPlaceSearch]=useState("")
const Places=[
    {Province:"gauteng",pNum:1},
    {Province:"north west",pNum:2},
    {Province:"free state",pNum:3},
    {Province:"port elizabirth",pNum:4},
    {Province:"limpopo",pNum:5},
    {Province:"northren cape",pNum:6},
    {Province:"western cape",pNum:7},
    {Province:"kwa zulu natal",pNum:8}
]
const months=[
    {MonthIs:"January",mon:1},
    {MonthIs:"Febuary",mon:2},
    {MonthIs:"March",mon:3},
    {MonthIs:"April",mon:4},
    {MonthIs:"May",mon:5},
    {MonthIs:"June",mon:6},
    {MonthIs:"July",mon:7},
    {MonthIs:"August",mon:8},
    {MonthIs:"Septrmber",mon:9},
    {MonthIs:"October",mon:10},
    {MonthIs:"November",mon:11},
    {MonthIs:"December",mon:12}
]
const [Year,setYear]=useState(2021)
const [month,setMonth]=useState("January")
const [Fname,setFname]=useState("")
const [ShootDate,setShootDate]=useState(1)
const [Messages,setMessages]=useState("")
const [Numbers,setNumbers]=useState()

const [page ,setPage]=useState(1)

const NextPage1=(event)=>{

    event.preventDefault()
    setPage(2)
    if(Emails.includes("@")){
        document.getElementById("invalidEmail").style.display="none"
    }else{
     document.getElementById("invalidEmail").style.display="inline"
    }

}
const NextPage2=(event)=>{
    event.preventDefault()
    if(Numbers.length===10){
        setPage(3)
    }
    else{
        document.getElementById("validNum").style.display="inline"
    }
    
}
const BackPage =()=>{
    setPage(page<2 ? 4:page-1)
}
const Sent=(event)=>{
    event.preventDefault()
    setPage(page>3 ? 1:page+1)
    // SendEmail()
}
const ChangeYr=(event)=>{
    setYear(event.target.value)
}
const ChangeMnth =(event)=>{
    setMonth(event.target.value)
    if(event.target.value.length===0){
        document.getElementById("MnthLbl").style.display="inline"
    }else{
        document.getElementById("MnthLbl").style.display="none"
    }
}
const ChangedFn =(event)=>{
    setFname(event.target.value)
    if(event.target.value.length===0){
        document.getElementById("fnLbl").style.display="inline"
    }else{
        document.getElementById("fnLbl").style.display="none"
    }
}
const ChangeEm=(event)=>{
    setEmails(event.target.value)
    if(event.target.value.length===0){
        document.getElementById("emailLbl").style.display="inline"
    }else{
        document.getElementById("emailLbl").style.display="none"
    }
}
const ChangeDt=(event)=>{
    document.getElementById("shootLbl").style.display="none"
    
    if(event.target.value.length>0){
        
        setShootDate(event.target.value)
    }if(event.target.value>31 || event.target.value<1){
       setShootDate(1)
    }else{
        setShootDate(event.target.value)
    }
   if(event.target.value.length===0){
    setShootDate(event.target.value)
   }
}
const ChangeMs=(event)=>{
    setMessages(event.target.value)
    if(event.target.value.length===0){
        document.getElementById("MsgLbl").style.display="inline"
    }else{
        document.getElementById("MsgLbl").style.display="none"
    }
}
const ChangeNum=(event)=>{
    setNumbers(event.target.value)
    if(event.target.value.length===0){
        document.getElementById("Pnum").style.display="inline"
    }
    else{
        document.getElementById("Pnum").style.display="none"
    }
}
const Changeloc=(event)=>{
    setPlaceSearch(event.target.value)
    if(event.target.value.length<0){
        document.getElementById("Loc").style.display="none"
        document.getElementById("plcLbl").style.display="inline"
    }else{
        document.getElementById("plcLbl").style.display="none"
        document.getElementById("Loc").style.display="inline"
    }
    if(document.getElementById("Loc").onblur){
        document.getElementById("Loc").style.display="none"
    }
   
}
// const SendEmail =()=>{
 
//   emailjs.send('service_9gi31u7', 'template_ibh7wOl',{
//     Fname:Fname,
//     email:Emails,
//     Number:Numbers,
//     message:Messages,
//     day:ShootDate,
//     year:Year,
//     month:month,
//     location:PlaceSearch

// }, 'user_ssOoa5rYPR1UQSprPCVIU')
//     .then((response)=>{
//         console.log(response.text);
//     },(error)=>{
//         console.log(Error)
//     })
// }


    return (
        <div className="ContactPage">
            
            <br/>
            {page===1?<div className="ContactSection">
                <div className="CenterTextC"><h2>Contact Section</h2>
                <hr/>
                </div>
                <div className="well">
                    <label id="fnLbl" className="Lbl">Name</label>
                    <input type="text" value={Fname} name="Fname" required onChange={ChangedFn}/>
                </div>
                <br/>
                <div className="Months">
                    <div>
                        <label className="Lbl" id="shootLbl">Day</label>
                        <input type="number" value={ShootDate} required onChange={ChangeDt}/>
                    </div>
                    <div>
                        <label className="Lbl" id="MnthLbl" >month</label>
                        <div className="Monthfs" id="Mont">
                          <div  className="Stickyi">{months.map((jy,hi)=>{
                              return(
                              <div>
                                  <li key={hi} onClick={()=>{setMonth(months[jy.mon-1].MonthIs); document.getElementById("Mont").style.display="none"}}>{jy.MonthIs}</li>
                            
                              </div>
                              )
                             })}</div>
                        </div>
                        <input type="text" value={month} required onFocus={()=>{document.getElementById("Mont").style.display="inline"}} onChange={ChangeMnth}/>
                    </div>
                    <div>
                        <label className="Lbl" id="shootLbl">year</label>
                        <input type="number" value={Year} name="ShootDate" required  onChange={ChangeYr}/>
                    </div>
                
                </div>
                <br/>
                <div className="well">
                <label id="emailLbl" className="Lbl">Email</label>
                <input type="text" value={Emails} name="Emails" required onChange={ChangeEm}/>
                <br/>
                <label className="Warning" id="invalidEmail">please add valid Email</label>
                </div>
                <br/>
                <button onClick={NextPage1} className="primary-btn">next</button>
                <br/>
            </div>:null}
            
            {page===2?<div className="InfoSection">
                      <div className="CenterTextC">
                         <h2>Info Section</h2>
                         <hr/>
                       </div>
                       <div className="well">
                       <label className="Lbl select"  id="plcLbl" >Province</label>
                       <div className="Sticky" >
                            <div id="Loc" className="Locations">{Places.map((jy,hi)=>{
                                return(<div>
                                        <li key={hi} onClick={()=>{
                                            setPlaceSearch(Places[jy.pNum-1].Province); 
                                            document.getElementById("Loc").style.display="none"}}>
                                            {jy.Province}
                                        </li>
                                    </div>)
                                })}
                            </div>
                        </div>
                        <input type ="text" value={PlaceSearch} onFocus={Changeloc} />
                       </div>
                       <div className="well">
                         <label className="Lbl" id="Pnum" >Phone No:</label>
                            <input type="text" value={Numbers} required onChange={ChangeNum}/>
                         <br/>
                         <label className="Warning" id="validNum">enter valid number</label>
                      </div>
                      <div className="well">
                          <label className="Lbl" id="MsgLbl">Message</label>
                            <input type="text" className="message" value={Messages} name={"Messages"} required  onChange={ChangeMs}/>
                     </div>
                      <br/>
                    <div>
                    <button onClick={BackPage} className="primary-btn">back</button>
                    <button onClick={NextPage2} className="primary-btn">next</button>
                    </div>
                	 <br/>
            </div>
            :null}
            {page===3 ?<div className="ConfirmSection">
            <div className="CenterTextC"><h2>Confirm Info Section</h2>
                <hr/>
                </div>
                <div className="TextDisplay">{"Name : "+Fname }<br/>
                {"Date for shoot :"+ShootDate +"/"+month+"/"+Year}<br/>
                {"Email :"+Emails}<br/>
                {"Photoshoot scheduled  at :"+PlaceSearch}<br/>
                {"contact No :"+Numbers}<br/>
                {" :"+Messages}</div>
                <div>
                <button onClick={BackPage} className="primary-btn">back</button><button onClick={Sent} className="primary-btn">Submit</button>
                </div>
                <br/>
            </div>:null}
            
            {page===4?<div className="SuccessSection">
            <div className="CenterTextC"><h2>Message Sent!</h2>
                <article>We'll be in contact soon!</article>
                <hr/>

                </div>
               
            </div>:null}
            <br/>
        </div>
    )
}
export default ContactPage