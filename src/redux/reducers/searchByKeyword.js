import {
    SEARCH_FIALDER,
    SEARCH_REQUIST,
    SEARCH_SUCCESS,
} from "../types/type";
const searchByKeyWord = (
    state = {
        loading: false,
        video:[],
    },
    action
) => {
    const { payload, type } = action

    switch (type) {
        case SEARCH_REQUIST:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                video: payload,
                loading: false,
            }
        case SEARCH_FIALDER:
            return {
                ...state,
                video: [],
                error: payload,
            }
        default:
            return state
    }
}
export default  searchByKeyWord