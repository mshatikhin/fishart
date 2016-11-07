// @flow

import { UPDATE_VIDEO_PORTFOLIO } from '../actions/vimeoActions';

type IState = {
    videos: any[];
}

const initialState: IState = {
    videos: []
};

export default function (state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATE_VIDEO_PORTFOLIO:            
            state.videos = action.videos;
            return Object.assign({}, state);
        default:
            return state;
    }
}