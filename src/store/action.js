import { push } from 'connected-react-router'

export const pokemon = (url) => dispatch => {
    console.log(url)
    return dispatch(push(url))
}