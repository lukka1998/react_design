import React from 'react'
import reactLogo from './assets/grow_together1.png'

function Grow_conversation() {
    return (
        <div style={{display:"flex" ,gap:"200px" , alignItems:"center",  justifyContent:"space-around", marginTop:"50px" , marginBottom:"50px" }}>
            <div>
                        <img src={reactLogo} alt="" />
                    </div>
            <div>
                <div style={{color: '#00252E', fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontStyle: 'normal', fontWeight: 700, lineHeight: '60px', textAlign:"left" }}>Flowing Conversations</div>
                <div style={{ display: 'flex', justifyContent:"flex-start" , color: '#00252E', width:"520px",fontFamily: 'Open Sans, sans-serif',fontSize: '20px',fontStyle: 'normal',fontWeight: 200,lineHeight: '36px', textAlign:"left" }}>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. </div>
                        
            </div>
        </div>
    )
}

export default Grow_conversation
