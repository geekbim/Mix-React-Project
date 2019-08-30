import Axios from 'axios'
import {RootPath, OnlinePath} from './Config'

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${root ? OnlinePath : RootPath}/${path}`, data)
        .then((res) => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Post