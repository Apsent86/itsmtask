export const LOAD_ELEMENTS = 'load_elements';
export const ADD_FAVORITE = 'add_favorite';
export const DELETE_FAVORITE = 'delete_favorite';
export const EDIT_ITEM_TITLE = 'edit_item_title';
export const EDIT_ITEM_BODY = 'edit_item_body';
export const EDIT_ITEM = 'edit_item';
export const LOAD_ELEMENTS_LOADING = 'load_elements_loadings';
export const LOAD_ELEMENTS_ERROR = 'load_elements_errors';

export const STATUS_LOADING = 'loading';
export const STATUS_ERROR = 'error';
export const STATUS_SUCCESS = 'success';

const initialState = {mainItems: [], favoriteItems: [], editItem: {body: '', title: ''}, status: STATUS_LOADING};

function favoriteAdd(item, state) {
    let mainItems = state.mainItems.filter(main => item.id !== main.id);
    let favoriteItems = state.favoriteItems.concat(item);

    return {...state, mainItems: mainItems, favoriteItems: favoriteItems}
}

function favoriteDelete(item, state) {
    let favoriteItems = state.favoriteItems.filter(main => item.id !== main.id);
    let mainItems = state.mainItems.concat(item);

    return {...state, mainItems: mainItems, favoriteItems: favoriteItems}
}

function editItem(item, state) {
    return {...state, editItem: item};
}

function editItemValue(value, field, state) {
    let editItem = {...state.editItem};

    if ('title' === field) {
        editItem.title = value;
    } else if ('body' === field) {
        editItem.body = value;
    } else {
        return state;
    }

    if (editItem.id) {
        let item = state.mainItems.concat(state.favoriteItems).find(main => main.id === editItem.id);
        if ('title' === field) {
            item.title = value;
        } else if ('body' === field) {
            item.body = value;
        }
    }

    return {...state, editItem: editItem};
}

function loadItems(items, state) {
    return {...state, mainItems: items, favoriteItems: [], status: STATUS_SUCCESS}
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ELEMENTS_LOADING:
            return {...state, status: STATUS_LOADING};
        case LOAD_ELEMENTS_ERROR:
            return {...state, status: STATUS_ERROR};
        case LOAD_ELEMENTS:
            return loadItems(action.items, state);
        case ADD_FAVORITE:
            return favoriteAdd(action.item, state);
        case DELETE_FAVORITE:
            return favoriteDelete(action.item, state)
        case EDIT_ITEM:
            return editItem(action.item, state)
        case EDIT_ITEM_TITLE:
            return editItemValue(action.value, action.field, state)
        case EDIT_ITEM_BODY:
            return editItemValue(action.value, action.field, state)
        default:
            return state;
    }
}