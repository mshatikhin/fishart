// @flow

const Base64 = require('js-base64').Base64;
const vimeoUrl = "https://api.vimeo.com";

export const UPDATE_VIDEO_PORTFOLIO = 'UPDATE_VIDEO_PORTFOLIO';

export function updateVideos(videos: any[]) {
    return {type: UPDATE_VIDEO_PORTFOLIO, videos};
}

function vimeoAuth(client_id: string, client_secret: string) {
    return fetch(`${vimeoUrl}/oauth/authorize/client?grant_type=client_credentials`, {
        method: "POST",
        headers: {
            "Authorization": "basic " + Base64.encode(client_id + ":" + client_secret)
        }
    })
}

export function videosRequest(userId: string, client_id: string, client_secret: string) {
    return (dispatch: any) => {
        vimeoAuth(client_id, client_secret)
            .then(response => response.json())
            .then(response => {
                return fetch(`${vimeoUrl}/users/${userId}/videos`, {
                    headers: {
                        "Authorization": "Bearer " + response.access_token
                    }
                })
                    .then(response => response.json())
                    .then((response) => {
                        return dispatch(updateVideos(response.data));
                    });
            }).catch(({errors}) => dispatch(updateVideos([])));
    };
}