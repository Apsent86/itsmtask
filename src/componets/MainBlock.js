import {Alert, Col, Container, Row, Spinner} from "react-bootstrap";
import React from "react";
import CardBlock from "./CardBlock";
import {ADD_FAVORITE} from "../redux/reducer";

function MainBlock({error, isLoaded, items}) {

    if (error) {
        return <Alert variant={'danger'}> {error} </Alert>
    } else if (isLoaded) {
        return <Spinner animation="border" role="status"> <span className="sr-only">Loading...</span></Spinner>
    } else {
        return (
            <Container className={'main-block'}>
                <Row>
                    {items.map((value, key) => {
                        return (
                            <Col sm={4} key={key}>
                                <CardBlock item={value} actionType={ADD_FAVORITE}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        );
    }
}

export default MainBlock;