import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Main_content from './Main_content'
import screen_logo from './assets/Screenshot 2024-11-02 at 00.01.40.png'
import Data_Content from './Data_Content'
import Conversation from './Conversation'
import Grow_conversation from './Grow_conversation'
import Users from './Users'
import Main_content_1 from './Main_content_1'
import Footer_Form from './Footer_Form'
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
        <Conversation></Conversation>
        <Grow_conversation></Grow_conversation>
        <Users></Users>
        <Main_content_1></Main_content_1>
        <Footer_Form></Footer_Form>
        
        
        
      



       </div>
    </>
  )
}

export default App
