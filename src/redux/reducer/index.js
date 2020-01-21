import {combineReducers} from 'redux'

import profile from "./profile";
import itemList from "./itemList";
import itemDetail from "./itemDetail";
import cart from "./cart";
import restaurants from "./restaurants";
import review from "./review";
import checkout from "./checkout";
import auth from './auth'
import detailCheckout from "./detailCheckout";


const appReducer = combineReducers({
   profile,itemDetail,itemList, cart, restaurants, review, checkout, detailCheckout, auth
} )
 
export default appReducer;