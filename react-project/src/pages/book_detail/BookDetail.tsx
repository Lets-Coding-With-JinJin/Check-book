import { Col, Row } from "react-bootstrap"

export function  BookDetail() {
    return (
        <>
        <Row md={2} xs={1} lg={3} className="g-3">
            <div className="justify-content-flex-start">
                <img src="/imgs/book1.jpg"></img>
                <h1>책 제목 적기</h1>
                <h2>카테고리 적기</h2>
            </div>
            <div className="Middle">
                <h2>줄거리</h2>
                <p>줄거리 내용 가져와야 함</p>
                <br></br>
                <h2>저자</h2>
                <p>저자 내용 가져와야 함</p>
            </div>
        </Row>
        </>
    )
}