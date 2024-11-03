import React from 'react'
import reactLogo from './assets/Group 19.svg'
import reactLogo1 from "./assets/color_logo_transparent-02.svg"


function Data_Content() {
    return (
        <div style={{display:"flex" , width:"100%" ,justifyContent:"space-around", marginTop:"100px"}}>
            <div >
                <img src={reactLogo} alt="" />
                <div style={{color: '#00252E',fontFamily: '"Open Sans", sans-serif',fontSize: '96px',fontStyle: 'normal',fontWeight: 700,lineHeight: '144px'}}>1.4k+</div>
                <div style={{color: '#808E9A',textAlign: 'center',fontFamily: '"Open Sans", sans-serif',fontSize: '24px',fontStyle: 'normal', fontWeight: 400,lineHeight: '36px'}}>Communities Formed</div>
            </div>
            <div>
                <img style={{backgroundColor: 'white'}} src={reactLogo1} alt="" />
                <div style= {{color: '#00252E',fontFamily: '"Open Sans", sans-serif',fontSize: '96px',fontStyle: 'normal',fontWeight: 700,lineHeight: '144px'}}>2.7m+</div>
                <div style={{color: '#808E9A',textAlign: 'center',fontFamily: '"Open Sans", sans-serif',fontSize: '24px',fontStyle: 'normal', fontWeight: 400,lineHeight: '36px'}}>Messages Sent</div>
            </div>
        </div>
    )
}

export default Data_Content
