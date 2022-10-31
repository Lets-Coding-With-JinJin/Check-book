import { Card } from "react-bootstrap"
import { Container } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"

type ReadingListProps = {
    id: number,
    name: string,
    date: string,
    imgUrl: string
}

export function ReadingList({id, name, date, imgUrl}:
ReadingListProps) {
    return (
        <Card className="h-100">
            <Card.Img
                src={imgUrl} 
                width="30px"
                height="70px" 
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{date}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}