import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import BookNote from '../pages/BookNotePage/BookNote';
import NoteList from '../pages/BookNotePage/NoteList';
import Note from '../pages/BookNotePage/Note';
import Post from '../pages/BookNotePage/Post';

function Router() {
    return (
        <div>
            <Routes>
                <Route path={"/"} exact><Home/></Route>
                <Route path={"/*"} exact><Home/></Route>
                <Route path={"/booknote"} exact><BookNote/></Route>
                <Route path={"/booknote/board/:boardId"} exact><NoteList/></Route>
                <Route path={"/booknote/note/:noteId"} exact><Note/></Route>
                <Route path={"/booknote/insert"} exact><Post/></Route>
                <Route path={"/booknote/update/:noteId"} exact><Post/></Route>
                <Route path={"/booknote/*"}><BookNote/></Route>
            </Routes>
        </div>
    );
}

export default Router;