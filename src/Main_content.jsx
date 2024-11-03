import React from 'react'
import MainButton from './MainButton'

function Main_content() {
    return (
        <>
        <div style={{ display: "flex", gap: "15px", width: "100%", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "150px" }}>
            <div style={{ color: '#00252E', fontFamily: 'Poppins, sans-serif', fontSize: '48px', ontStyle: 'normal', fontWeight: 700, ineHeight: '72px' }}>Build The Community Your Fans Will Love</div>
            <div style={{ width: "600px", color: '#00252E', textAlign: 'center', fontFamily: '"Open Sans", sans-serif', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '30px' }}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </div>
            <MainButton></MainButton>
        </div>
    
        </>
    )
}

export default Main_content
