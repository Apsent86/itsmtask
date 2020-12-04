import {ADD_FAVORITE, DELETE_FAVORITE, EDIT_ITEM, EDIT_ITEM_BODY, EDIT_ITEM_TITLE, LOAD_ELEMENTS} from "./reducer";

export function loadElements(items) {
    return {type: LOAD_ELEMENTS, items: items}
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
    return {type: EDIT_ITEM_BODY, value: body, field: 'body' }
}