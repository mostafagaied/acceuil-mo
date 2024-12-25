import React from 'react'
import"./chat.css"
import SearchBar from './searchbar/searchbar'
import TravelSearchBar from '../../../Components/TravelSearchBar'
import Box from './box/box'



function Chat() {
  return (
    <div className='chat'>
     <TravelSearchBar/>
     <br/>
     <br/>
     <br/>
     <ul className='li'>
     <li><Box/></li>
     <li><Box/></li>
     <li><Box/></li>
     <li><Box/></li>
     <li><Box/></li>
     <li><Box/></li>
     
     
     
     
     
     </ul>
     
     
     
    </div>
  )
}

export default Chat