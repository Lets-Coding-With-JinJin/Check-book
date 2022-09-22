import { Card } from "react-bootstrap"
import { Container } from "react-bootstrap"

type ReadingListProps = {
    id: number,
    name: string,
    author: string,
    imgUrl: string
}

export function ReadingList() {
    return (
        <Container>
                <h1>독서 기록</h1>
                <h2>읽고 있는 책 중에서 기록하고자 하는 책을 선택하세요.</h2>
        </Container>
    )
}