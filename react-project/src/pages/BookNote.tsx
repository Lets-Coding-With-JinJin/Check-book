import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Col, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { ReadingList } from "../components/ReadingList"
import { Writing } from "../components/Writing"

export function SplitPane(props: { left: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; right: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

export function BookNote() {
    return (
        <>
            
            <Container className="mb-0" 
                left={
                    <ReadingList/>
                }
                right={
                    <Writing/>
                }
            />  
            
        </>
    )
}