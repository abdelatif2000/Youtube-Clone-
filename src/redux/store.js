import {applyMiddleware, combineReducers, createStore} from "redux";
import  tagglesReducer from './reducers/taggelsStyle'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import getVideosReducer from "./reducers/getVideosReducer";
import getVideoByIdReducer from "./reducers/getVideoById";
import getNumberSubscrebeReducer from "./reducers/getNumberSubscreb";
import setSubcsribing from "./reducers/setSubcsribing";
import getCommnets from "./reducers/getCommnets";
import relitedVideo from "./reducers/relitedVideo";
import searchByKeyWord from "./reducers/searchByKeyword";

const rootReducer=combineReducers({
    taggles:tagglesReducer,
    auth:authReducer,
    getVideos:getVideosReducer,
    getVideoById:getVideoByIdReducer,
    getNumberSubscreb:getNumberSubscrebeReducer,
    setSubscribing:setSubcsribing,
    getCommentes:getCommnets,
    relitedVideo:relitedVideo,
    searchByKeyword:searchByKeyWord
});

const store =createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)));
export default store;