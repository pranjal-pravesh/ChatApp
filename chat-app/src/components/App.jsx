import { Main } from "./main-screen/main"
import { Route, Routes } from "react-router-dom"
import Register from "./register/register"

export default function App() {
  function SampleCall(){
    return <p>Hello</p>
  }
  return (
    <>
    <Main/>

    {/* <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/chat" element={<Main />}/>
      <Route path="/calls" element={<SampleCall />}/>
    </Routes> */}
    </>
  )
}