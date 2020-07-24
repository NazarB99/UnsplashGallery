import {ACCESS_KEY, APP_URL} from './Constants'

export const getCallApi = async (url) => {
    const response = await fetch(`${APP_URL}/${url}&client_id=${ACCESS_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    const res = await response.json()
    return res
}
