import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import SignIn from "./layout/SignIn"
function App() {

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/singin" element={<SignIn/>}/>
          {/* <Route path="/panel" element={<Panel/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/> */}

        </Routes>

      </Router>


    </>
  )
}

export default App
