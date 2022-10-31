import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Col, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { ReadingList } from "../../components/ReadingList"
import { Writing } from "../../components/Writing"
import * as React from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import readingItems from "../../data/readinglist.json"

const BookNote: React.FC = () => {
    return (
        <Layout>
            <Sidebar>
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
            </Sidebar>
            <Main>           
                <Row span={20}>
                            <p>기록하는 부분</p>
                </Row>
            </Main>     
        </Layout>
    )
}

export default BookNote;