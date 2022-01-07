import {
    RELITED_VIDEO_REQUIST,
    RELITED_VIDEO_SUCCESS,
    SELECT_VIDEO_FIALDER,
} from "../types/type";

const relitedVideo = (
    state = {
        loading: true,
        video:[],
    },
    action
) => {
    const { payload, type } = action

    switch (type) {
        case RELITED_VIDEO_REQUIST:
            return {
                ...state,
                loading: true,
            }
        case RELITED_VIDEO_SUCCESS:
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
export default relitedVideo;