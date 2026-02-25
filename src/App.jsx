import { Routes, Route } from "react-router-dom"
import Header from "./components/common/Header"
// import Home from "./components/pages/Home"

// import Contact from "./components/pages/Contact"
import About from "./components/pages/About"

function App() {
  return (
    <>
    <Header/>
    <div className="pt-[130px]">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
    </>
  )
}

export default App