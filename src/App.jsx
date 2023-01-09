import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import Equipments from './pages/Equipments'
import Overview from './pages/Overview'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
   <BrowserRouter basename='/barrio/'>
   <Navbar />
   <main>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/equipments" element={<Equipments />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
   </main>
   <Footer />
   </BrowserRouter>
  )
}

export default App
