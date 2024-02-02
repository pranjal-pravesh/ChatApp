import { Main } from "./main-screen/main"
import { Navigate, Route, Routes } from "react-router-dom"
import Register from "./register/register"
import ChatTab from "./main-screen/chat-tab/chatTab"
import CallTab from "./main-screen/calls-tab/callTab"
import FriendsTab from "./main-screen/friends-tab/friends-tab"
import Settings from "./main-screen/settings-tab/settings"

export default function App() {
  return (
    <>
    <Routes>
        <Route  element={<Main/>}>
          <Route path='/' element={<Navigate to="/chats" />}/>
          <Route path='/chats' element={<ChatTab/>} />
          <Route path='/calls' element={<CallTab/>}/>
          <Route path='/friends' element={<FriendsTab/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Route>

        
    </Routes>
    </>
  )
}