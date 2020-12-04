import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainBlock from "./componets/MainBlock";
import FavoritesBlock from "./componets/FavoritesBlock";
import EditBlock from "./componets/EditBlock";
import {loadElementsAsync} from "./redux/actions";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch();
    const mainItems = useSelector(state => state.mainItems)
    const favoriteItems = useSelector(state => state.favoriteItems)
    const status = useSelector(state => state.status)


    useEffect(() => {
        dispatch(loadElementsAsync())
    }, [])

    return (
        <Container className={'main'} fluid>
            <Container fluid>
                <Row>
                    <Col sm={8} className={'border'}>
                        <MainBlock status={status} items={mainItems}/>
                    </Col>
                    <Col sm={4} className={'border main-block'}>
                        <FavoritesBlock items={favoriteItems}/>
                    </Col>
                </Row>
            </Container>
            <Container className={'border bottom-block'} fluid>
                <EditBlock/>
            </Container>
        </Container>
    );
}

export default App;
