import React from 'react'
import Home from '../Components/Leave_section/Leave'
import Display from '../Components/MainDisplay/Display'
import Empolyee from '../Components/Employee/Empolyee'
import MyLocation from '../Components/Location/MapLocation'

 const homePage=()=> {
    return (
        <div>
             <Home/>
             <Display/>
             <Empolyee/>
             {/* <MyLocation/> */}
        </div>
    )
}
export default homePage