import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import Welcome from "./screens/Welcome"
import Service from "./screens/Service"
import Testimonial from "./screens/Testimonial"
import LatestNews from "./screens/LatestNews"
import Footer from "./screens/Footer"

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Home />
      <Welcome />
      <Service />
      <Testimonial />
      <LatestNews />
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
