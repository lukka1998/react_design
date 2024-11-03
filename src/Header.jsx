import React from 'react'
import logo_image from './assets/color_logo_transparent.svg'
import './App.css'
function Header() {
    return (
        <div className='header' style={{display:'flex' ,justifyContent:"space-between", padding:"20px 80px" ,cursor: 'pointer'}}>
            <img className='logo' src={logo_image} alt="" />
            <button  style={{width:"136px" , height:"40px", borderRadius: '20px' , color:"#FF52C1" ,border: '1px solid #FF52C1' ,background: '#FFF', boxShadow: '0px 0px 9px 0px rgba(255, 82, 193, 0.22)' , cursor: 'pointer'}}>Try it Free</button>
        </div>
    )
}

export default Header
