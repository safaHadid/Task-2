import './App.css'
import ContactUs from './components/ContactUs/ContactUs'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Properties from './components/Properties/Properties'
import PropertyDeal from './components/PropertyDeal/PropertyDeal'
import VideoView from './components/VideoView/VideoView'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <VideoView />
      <PropertyDeal />
      <Properties />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
