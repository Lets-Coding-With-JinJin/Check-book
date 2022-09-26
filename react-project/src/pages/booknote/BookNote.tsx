import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Col, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { ReadingList } from "../../components/ReadingList"
import { Writing } from "../../components/Writing"
import readingItems from "../../data/readinglist.json"

export function BookNote() {
    return (
        <>
                <Row span={5}>
                    <h1>독서 기록</h1>
                    <p>읽고 있는 책 중에서 기록하고자 하는 책을 선택하세요.</p>
                
                    <ul>
                        {readingItems.map(item => (
                            <li key={item.id}>
                                <ReadingList {...item } />
                            </li>
                            ))}
                    </ul>
                </Row>

                <Row span={20}>
                            <p>기록하는 부분</p>
                </Row>
        </>
    )
}