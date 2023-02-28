import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './index.css';
import SideB from "./Components/SideBar/SideBar";
import LastSection from './Components/FootContact/LastSection';
import Homep from './HomePage/homePage';
import About from './About/About';
import ContactPage from "./Contact/ContactPage"
import ServicePage from './Services/ServicePage'
import GalleryPage from "./Galery/GalleryPage"


const Main =()=>{
 return(
   <div>
     <Router>
     <SideB/>
       <Routes>
          <Route exact path="/" element={<Homep/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
          <Route exact path="/service" element={<ServicePage/>}/>
          <Route exact path="/gallery" element={<GalleryPage/>}/>
        </Routes>
      <LastSection/>
     </Router>
   </div>
 )
}

ReactDOM.render(<Main/>,document.getElementById('root'));


