
import {configureStore} from "@reduxjs/toolkit"
import CardSlise from "./CardSlice"

const Store = configureStore({
    reducer :{
        card : CardSlise
    },
    
});
export default Store;