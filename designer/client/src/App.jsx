import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import Welcome from "./screens/Welcome"
import Service from "./screens/Service"
import Testimonial from "./screens/Testimonial"
import LatestNews from "./screens/LatestNews"
import Footer from "./screens/Footer"
import ScrollToTopBtn from "./components/ScrollToTopBtn"

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <main>
        <section id="home"><Home /></section>
        <section id="welcome"><Welcome /></section>
        <section id="service"><Service /></section>
         <section id="testimonial"><Testimonial /></section>
        <section id="news"><LatestNews /></section>
        <section id="footer"><Footer /></section>
     </main>
     <ScrollToTopBtn />
     </BrowserRouter>
    </>
  )
}

export default App
