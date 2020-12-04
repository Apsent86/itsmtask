import React from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {editBodyItem, editTitleItem} from "../redux/actions";


function EditBlock() {
    const item = useSelector(state => state.editItem);
    const dispatch = useDispatch();

    function handlerTitleChange(event) {
        dispatch(editTitleItem(event.currentTarget.value))
    }

    function handlerBodyChange(event) {
        dispatch(editBodyItem(event.currentTarget.value))
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" value={item.title}
                              onChange={handlerTitleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} value={item.body}  onChange={handlerBodyChange}/>
            </Form.Group>
        </Form>
    )
}

export default EditBlock;