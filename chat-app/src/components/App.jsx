import { Main } from "./main-screen/main"
import { Navigate, Route, Routes } from "react-router-dom"
import Register from "./register/register"
import ChatTab from "./main-screen/chat-tab/chatTab"
import CallTab from "./main-screen/calls-tab/callTab"

export default function App() {
  return (
    <>
    <Routes>
        <Route  element={<Main/>}>
          <Route path='/' element={<Navigate to="/chats" />}/>
          <Route path='/chats' element={<ChatTab/>} />
          <Route path='/calls' element={<CallTab/>}/>
          <Route path='/friends' element={<p>Friends Tab</p>}/>
          <Route path='/settings' element={<p>Settings Tab</p>}/>
        </Route>

        
    </Routes>
    </>
  )
}