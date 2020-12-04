import {Button, Card} from "react-bootstrap";
import React from "react";
import {ADD_FAVORITE, DELETE_FAVORITE} from "../redux/reducer";
import {addFavorite, deleteFavorite, editItem} from "../redux/actions";
import {useDispatch} from "react-redux";

// Почему нельзя использовать call apply ???
function CardBlock({item, actionType}) {

    const dispatch = useDispatch();

    function handlerOnClick(actionType) {
        if (actionType === ADD_FAVORITE) {
            dispatch(addFavorite(item));
        } else if (actionType === DELETE_FAVORITE) {
            dispatch(deleteFavorite(item))
        }
    }

    function getText(actionType){
        if (actionType === ADD_FAVORITE) {
            return  '*'
        } else if (actionType === DELETE_FAVORITE) {
            return  'X'
        }
    }

    function getBtnType(){
        if (actionType === ADD_FAVORITE) {
            return  'primary'
        } else if (actionType === DELETE_FAVORITE) {
            return  'danger'
        }
    }

    return (
        <Card className={'card-block'}  onClick={() => dispatch( editItem(item) )} >
            <Card.Header>
                {item.title}
                <Button onClick={handlerOnClick.bind(this,actionType)} className={'card-button'} variant={getBtnType(actionType)}>{getText(actionType)}</Button>
            </Card.Header>
            <Card.Body>
                <p>{item.body}</p>
            </Card.Body>
        </Card>
    );
}

export default CardBlock;