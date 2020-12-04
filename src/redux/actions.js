import {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    EDIT_ITEM,
    EDIT_ITEM_BODY,
    EDIT_ITEM_TITLE,
    LOAD_ELEMENTS,
    LOAD_ELEMENTS_ERROR,
    LOAD_ELEMENTS_LOADING
} from "./reducer";

export function loadElements(items) {
    return {type: LOAD_ELEMENTS, items: items, status: 'success'}
}

export function loadElementsLoading() {
    return {type: LOAD_ELEMENTS_LOADING, status: 'loading'}
}

export function loadElementsError() {
    return {type: LOAD_ELEMENTS_ERROR, status: 'error'}
}

export function loadElementsAsync() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    return (dispatch) => {

        dispatch(loadElementsLoading());

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(loadElements(result))
                },
                (error) => {
                    dispatch(loadElementsError());
                }
            )
    }
}

export function addFavorite(item) {
    return {type: ADD_FAVORITE, item: item}
}

export function deleteFavorite(item) {
    return {type: DELETE_FAVORITE, item: item}
}

export function editItem(item) {
    return {type: EDIT_ITEM, item: item}
}

export function editTitleItem(title) {
    return {type: EDIT_ITEM_TITLE, value: title, field: 'title'}
}

export function editBodyItem(body) {
    return {type: EDIT_ITEM_BODY, value: body, field: 'body'}
}