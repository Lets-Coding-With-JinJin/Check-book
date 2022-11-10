import { createAction, handleActions } from 'redux-actions';
import firestore from './Firestore';
import dateFormat from 'dateformat';


// action type
const BOARD_SAVE = 'SAVE';
const BOARD_REMOVE = 'REMOVE';
const BOARD_READ = 'READ';
const BOARD_LIST = 'LIST'; 

export const board_save = createAction(BOARD_SAVE);
export const board_remove = createAction(BOARD_REMOVE, brdno => brdno);
export const board_read = createAction(BOARD_READ);
export const board_list = createAction(BOARD_LIST);

export const firebase_board_list = () =>{
    return (dispatch) => {
        return firestore.collection("boards").orderBy("brddate", "desc")
                .onSnapshot(function(snapshot) {
                    snapshot.docChanges().forEach(function(change) {
                        var childData = change.doc.data();
                        if (change.type === "added") {
                            childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
                            dispatch(board_save(childData));
                        } else
                        if (change.type === "modified") {
                            dispatch(board_save(childData));
                        } else
                        if (change.type === "removed") {
                            dispatch(board_remove(childData.brdno));
                        }
                            
                    });
                });
    }
}

export const firebase_board_remove = ( brdno = {}) => {
    return (dispatch) => {
        return firestore.collection('boards').doc(brdno).delete();
    }
};

export const firebase_board_save = ( data = {}) => {
    return (dispatch) => {
        if (!data.brdno) {
            var doc = firestore.collection('boards').doc();
            data.brdno = doc.id;
            data.brddate = Date.now();
            return doc.set(data);
        } else {
            return firestore.collection('boards').doc(data.brdno).update(data);    
        }
    }
};

const initialState = {
    boards: [], 
    selectedBoard: {}
};

export default handleActions({
    [BOARD_LIST]: (state, { payload: data }) => {
        return {boards: data, selectedBoard: {} };
    },
    [BOARD_SAVE]: (state, { payload: data }) => {
        let boards = state.boards;
        let inx = boards.findIndex(row => row.brdno === data.brdno);
        if (inx===-1) {                                                    // new : Insert
            let newboards = [{date: new Date(), ...data }]
            return {boards: newboards.concat(boards), selectedBoard: {} };
        } else {                                                           // Update
            return {boards: boards.map(row => data.brdno === row.brdno ? {...data }: row), selectedBoard: {} };
        }    
    },
    [BOARD_REMOVE]: (state, { payload: brdno }) => {
        let boards = state.boards;
        return {boards: boards.filter(row => row.brdno !== brdno), selectedBoard: {} };
    },
    [BOARD_READ]: (state, { payload: brdno }) => {
        let boards = state.boards;
        return {
            boards: boards,
            selectedBoard: boards.find(row => row.brdno === brdno)
        };
    }
}, initialState);