import React from "react";
import CardBlock from "./CardBlock";
import {DELETE_FAVORITE} from "../redux/reducer";

function FavoritesBlock({items}) {

    if (0 === items.length) {
        return null;
    } else {
        return items.map((value, key) => {
            return <CardBlock key={key} item={value} actionType={DELETE_FAVORITE}/>
        })
    }
}

export default FavoritesBlock;