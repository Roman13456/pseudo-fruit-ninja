import { baseURL} from "helpers/constants";

const api = (url, callback) => {
    fetch(`${baseURL}${url}`)
        .then(res => res.json())
        .then(json => callback(json))
}

export {
    api
}
