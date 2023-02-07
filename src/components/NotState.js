import React, {useState} from 'react'
import NoteContext from './NoteContext'

function NotState(props) {

    const [isLogin,setIsLogin] = useState(false);
    const [can,setCan] = useState("")

  return (
    <NoteContext.Provider value={{isLogin,setIsLogin,can,setCan}}>
      {props.children}

    </NoteContext.Provider>
  )
}


export default NotState;