import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeOne from "./screens/HomeOne"
import Welcome from "./screens/Welcome"
import Service from "./screens/Service"
import Testimonial from "./screens/Testimonial"

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <HomeOne />
      <Welcome />
      <Service />
      <Testimonial />
     </BrowserRouter>
    </>
  )
}

export default App
