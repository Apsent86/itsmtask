import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useEffect, useReducer, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainBlock from "./componets/MainBlock";
import FavoritesBlock from "./componets/FavoritesBlock";
import EditBlock from "./componets/EditBlock";
import {reducer} from "./redux/reducer";
import {loadElements} from "./redux/actions";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const dispatch = useDispatch();
    const mainItems = useSelector(state => state.mainItems)
    const favoriteItems = useSelector(state => state.favoriteItems)


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    dispatch(loadElements(result))
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])

    return (
        <Container className={'main'} fluid>
            <Container fluid>
                <Row>
                    <Col sm={8} className={'border'}>
                        <MainBlock error={error} isLoaded={isLoaded} items={mainItems} />
                    </Col>
                    <Col sm={4} className={'border main-block'}>
                        <FavoritesBlock items={favoriteItems}  />
                    </Col>
                </Row>
            </Container>
            <Container className={'border bottom-block'} fluid>
                 <EditBlock />
            </Container>
        </Container>
    );
}

export default App;
