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

function loadUserVideos(userId: string, token: string) {
    return fetch(`${vimeoUrl}/users/${userId}/videos?per_page=100&sort=date&direction=desc`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export function videosRequest(userIds: string[], client_id: string, client_secret: string) {
    return (dispatch: any) => {
        vimeoAuth(client_id, client_secret)
            .then(response => response.json())
            .then(response => {
                Promise.all(userIds.map(uid => loadUserVideos(uid, response.access_token)))
                    .then(responses => {
                        return Promise.all(responses.map(r => r.json()));
                    }).then(responses => {
                    responses.forEach(r => r.total - r.data.length > 0 ? console.log("need more video") : "");
                    let videos = [].concat(...responses.map(r => r.data));
                    let portfolio = videos.filter(v => v.tags.some(t => t.tag === "portfolio"));
                    dispatch(updateVideos(portfolio));
                });
            }).catch(({errors}) => dispatch(updateVideos([])));
    };
}