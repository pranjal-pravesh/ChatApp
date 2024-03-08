import { Main } from "./main-screen/main"
import { Navigate, Route, Routes } from "react-router-dom"
import Register from "./register/register"
import ChatTab from "./main-screen/chat-tab/chatTab"
import CallTab from "./main-screen/calls-tab/callTab"
import FriendsTab from "./main-screen/friends-tab/friends-tab"
import SettingsTab from "./main-screen/settings-tab/settings-tab"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { updateScreenWidth } from "../features/screen-width"


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateScreenWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <>
    <Routes>
        <Route  element={<Main/>}>
          <Route path='/' element={<Navigate to="/chats" />}/>
          <Route path='/chats' element={<ChatTab/>} />
          <Route path='/calls' element={<CallTab/>}/>
          <Route path='/friends' element={<FriendsTab/>}/>
          <Route path='/settings' element={<SettingsTab/>}/>
        </Route>

        
    </Routes>
    </>
  )
}