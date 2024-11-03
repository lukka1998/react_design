import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Main_content from './Main_content'
import screen_logo from './assets/Screenshot 2024-11-02 at 00.01.40.png'
import Data_Content from './Data_Content'
function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Main_content></Main_content>
        <div style={{display:"flex", justifyContent:"center" ,marginTop:"6 np0px"}}>
        <img style={{textAlign:"center" ,marginTop:" 20px"}} src={screen_logo} alt=""/>
        </div>
        <Data_Content></Data_Content>
        
        
      



       </div>
    </>
  )
}

export default App
