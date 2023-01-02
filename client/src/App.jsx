import './App.css'
import heroImg from './assets/images'

function App() {

  return (
    <div className="App">
    {/* Navbar */}
    {/* Hero*/}
    <section className="hero">
      <div className="container">
        <div className="wrapper">
          <img src={heroImg} alt="hero" className="hero-img" />
          <div className="welcome">
            Welcome to Petra, the best
            <br />
            innovation company in Petrochemicals
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default App
