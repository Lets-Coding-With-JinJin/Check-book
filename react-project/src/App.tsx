import { Routes, Route } from "react-router-dom"
import { Container, Nav } from "react-bootstrap"
import { Home } from "./pages/Home"
//import { BookNote } from "./pages/booknote/BookNote"
import { BookDetail} from "./pages/book_detail/BookDetail"


function App() {
  return (
    <Container className="mb-4">
      <Routes>
        {/* <Route path="/booknote" element={<BookNote />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/book_detail" element={<BookDetail />} />
      </Routes>

      <Nav.Link href={'/book_detail/BookDetail'}>
        <img src="/imgs/book1.jpg" width="100px" height="200px"></img>
      </Nav.Link>
    </Container>
  )
}

export default App
