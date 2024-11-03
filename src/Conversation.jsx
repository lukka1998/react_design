import React from 'react'
import reactLogo from './assets/grow_together.png'
function Conversation() {
    return (
        <div style={{textAlign:"center" ,marginTop:"50px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1640" height="1042" viewBox="0 0 1440 842" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 127.6C0 127.6 229.405 -0.920837 437.988 79.1868C646.571 159.294 895.524 132.592 1032.15 79.1868C1168.79 25.7817 1172.7 -39.3352 1440 30.2243C1707.3 99.7838 1440 728.416 1440 728.416C1440 728.416 1228.11 856.595 848.142 792.506C468.171 728.416 0 841.156 0 841.156V127.6Z" fill="#F6FBFF"/>
            {/* <image href="your-image-url.jpg" x="100" y="100" width="200" height="200" /> */}
            <foreignObject x="80" y="250" width="1740" height="1000">
                <div style={{display:"flex" ,gap:"200px" , alignItems:"center"  }}>
                    <div>
                        <div style={{color: '#00252E', fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontStyle: 'normal', fontWeight: 700, lineHeight: '60px', textAlign:"left" }}>Grow Together</div>
                        <div style={{ display: 'flex', justifyContent:"flex-start" , color: '#00252E', width:"520px",fontFamily: 'Open Sans, sans-serif',fontSize: '20px',fontStyle: 'normal',fontWeight: 200,lineHeight: '36px', textAlign:"left" }}>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </div>
                        
                    </div>
                    <div>
                        <img src={reactLogo} alt="" />
                    </div>
                    
                </div>
            </foreignObject>
            </svg>
        </div>
    )
}

export default Conversation
