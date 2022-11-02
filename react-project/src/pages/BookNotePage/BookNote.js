import React from 'react';
import './BookNote.css';
import { useParams } from 'react-router-dom';

const BookNote = () => {
    const { BookNoteId } = useParams();
    return (
        <>
        <div className="book-list">
            <section className='title'>
                <h1>독서 기록 작성</h1>
                <p>읽고 있는 책 중에서 기록하고자 하는 책을 선택하세요.</p>
            </section>
            <section className='books'>
                
            </section>
        </div>
        <div className='book-note'>
            <h1>{BookNoteId}번 상품 페이지</h1>
        </div>
        </>
    );
}

export default BookNote;