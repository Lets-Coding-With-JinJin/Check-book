import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { BookNote } from "./pages/booknote/BookNote"

function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/booknote" element={<BookNote />} />
      </Routes>
    </Container>
  )
}

export default App
