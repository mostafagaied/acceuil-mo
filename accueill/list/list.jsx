import React from 'react'
import"./list.css"
import { Userinfo } from './UserInfo/Userinfo';

import ChatList from './chatList/Formtraje';

function List() {
  return (
    <div className='list'>
        
        <Userinfo/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ChatList/>
    
    
    </div>
  )
}

export default List;