import React from 'react'
import logo_image from './assets/color_logo_transparent.svg'
import icon from './assets/Group 21.svg'
import icon1 from './assets/Group 12.svg'
import icon2 from './assets/post-twitter.svg'
import icon3 from './assets/post-facebook.svg'
import icon4 from './assets/717392.png'






function Footer_Form() {
    return (
    <div style={{marginTop:"200px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 714" fill="none" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 93.4244C0 93.4244 374.778 -76.9713 727.484 44.6608C1080.19 166.293 1228.91 185.195 1454.97 44.6608C1681.03 -95.8738 1454.97 714 1454.97 714H0V93.4244Z" fill="#00252E" />
            <foreignObject x="280" y="300" width="1200px" height="900px">
        <div style={{display:"flex", gap:"300px"}}>
            <div style={{display:"flex" , gap:"10px" ,flexDirection:"column" }}>
                <img style={{width:"200px"}} src={logo_image} alt="" />
                <div style={{width:"300px" , color: '#FFF', fontFamily: 'Open Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</div>
                <div  style={{display:"flex" , gap:"10px", alignItems:"center" ,  color: '#FFF', fontFamily: 'Open Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px'}}> 
                    <img src={icon}alt="" />
                    <div>Phone: +1-543-123-4567</div>

                </div >
                <div style={{display:"flex" , gap:"10px" ,alignItems:"center" ,  color: '#FFF', fontFamily: 'Open Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px'}}>
                    <img src={icon1}alt="" />
                    <div>example@huddle.com</div>
                </div>
                <div  style={{display:"flex" , gap:"20px" , marginTop:"50px"}} className="icons">
                    <img style={{width:"30px"}} src={icon2} alt="" />
                    <img style={{width:"30px"}} src={icon3} alt="" />
                    <img style={{width:"30px" , backgroundColor:"white" , borderRadius:"5px"}} src={icon4} alt="" />
               </div>
            </div>     
            <div style={{display:"flex" ,flexDirection:"column" ,gap:"10px"}}>
                <div style={{ color: '#FFF', fontFamily: 'Open Sans', fontSize: '24px', fontStyle: 'normal', fontWeight: 700, lineHeight: '36px' }}                >NEWSLETTER</div>
                <div style={{width:"300px" , color: '#FFF', fontFamily: 'Open Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</div>
                <div style={{marginTop:"40px"}} className="input_button">
                    <input style={{padding:"10px" ,width:"250px" }} type="text" />
                    <button style={{padding:"10px" , border:"none" , cursor:"pointer" , marginLeft:"10px", width:"160px", color:"white" , backgroundColor:"#FF52C1"}}>Subscribe</button>
                </div>


            </div>


        </div>     
        

        </foreignObject>




        </svg>
        
    </div>     
    





    )
}

export default Footer_Form
