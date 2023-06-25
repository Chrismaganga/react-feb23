import './App.css'
import Bot from './components/Bot';
import About from './components/About';
import Codelovers from './components/Codelovers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {


  return (
    <div>
      <Navbar />
      <About />
      <Bot />
      <Codelovers />
      <Contact />
      <Footer />
      <Hero />
      
      <Projects />
      <Skills />

    </div>
  )
}

export default App
