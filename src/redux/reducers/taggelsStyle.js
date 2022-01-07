 import {TaggelMenu,TaggelSearch} from '../types/type'
const initail ={
    showMenu:false,
    taggelSearch:false
}

function TaggelsStyle(prevState=initail, action) {
    if(action.type===TaggelMenu){
        return {...prevState, showMenu:!prevState.showMenu }
    }
    else if(action.type===TaggelSearch){
        return {...prevState, taggelSearch:!prevState.taggelSearch }
    }
    else{
        return prevState;
    }

}

export default TaggelsStyle;
