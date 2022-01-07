import {SELECT_VIDEO_FIALDER, SELECT_VIDEO_REQUIST, SELECT_VIDEO_SUCCESS} from "../types/type";

 const getVideoById = (
    state = {
        loading: false,
        video:null,
    },
    action
) => {
    const { payload, type } = action

    switch (type) {
        case SELECT_VIDEO_REQUIST:
            return {
                ...state,
                loading: true,
            }
        case SELECT_VIDEO_SUCCESS:
            return {
                ...state,
                video: payload,
                loading: false,
            }
        case SELECT_VIDEO_FIALDER:
            return {
                ...state,
                video: null,
                error: payload,
            }

        default:
            return state
    }
}
export default getVideoById;