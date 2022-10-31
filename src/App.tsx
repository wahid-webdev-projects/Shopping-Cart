import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Store} from "./pages/Store"
import {About} from "./pages/About"
import {NavBs} from "./components/Navbar"
import { ShoppingCartProvider } from "./contex/shopingcartcontex"
function App() {
  return (
   <ShoppingCartProvider>
    <NavBs/>
    <Container className="mb-10">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Store" element={<Store/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
    </Container>
   </ShoppingCartProvider> 
   
  )
}

export default App
