// @flow

//const Base64 = require('js-base64').Base64;

export const UPDATE_VIDEO_PORTFOLIO = 'UPDATE_VIDEO_PORTFOLIO';

export function updateVideos(videos: any[]) {    
    return { type: UPDATE_VIDEO_PORTFOLIO, videos };
}

export function videosRequest(userId: string, client_id: string, client_secret: string) {            
    return (dispatch: any) => {
        return fetch(`https://api.vimeo.com/users/${userId}/videos`,  {
            headers: {
                "Authorization" : "Bearer 63e6b08cf575823eecd9ec5209ced4e5"
            }
        })
        .then(response => response.json())
        .then((response) => {                        
            return dispatch(updateVideos(response.data));
        })
        .catch(({ errors }) => dispatch(updateVideos([])));
    };
}