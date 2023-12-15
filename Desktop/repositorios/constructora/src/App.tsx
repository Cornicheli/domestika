import { Nav, Carrousel, AboutUs, Typologies, SocialNetwoks } from './components'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=" w-ful h-[250vh]">
      <Nav />
      <Carrousel />
      <AboutUs />
      <Typologies />
      <SocialNetwoks />
      <Footer />
    </div>
  )
}

export default App