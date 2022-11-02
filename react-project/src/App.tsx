import { Routes, Route } from "react-router-dom"
import { Container, Nav } from "react-bootstrap"
import { Home } from "./pages/Home"

function App() {
  return (
    <Container className="mb-4">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Container>
  )
}

export default App
