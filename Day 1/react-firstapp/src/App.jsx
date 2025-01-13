import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Card from "./Components/Card"

function App() {
  return (
    <>
    <Navbar />
    <div className="cards">
    <Card title="Card 1" Description="Card 1 Description" />
    <Card title="Card 2" Description="Card 2 Description" />
    <Card title="Card 3" Description="Card 3 Description" />
    </div>
    <Footer />
    </>
  )
}

export default App
