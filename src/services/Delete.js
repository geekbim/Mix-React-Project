import Axios from 'axios'
import { OnlinePath, RootPath } from './Config';

const Delete = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.delete(`${root ? OnlinePath : RootPath}/${path}`)
        .then((res) => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Delete