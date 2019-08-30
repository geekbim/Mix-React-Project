import Axios from 'axios'
import {RootPath, OnlinePath} from './Config'

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.put(`${root ? OnlinePath : RootPath}/${path}`, data)
        .then((res) => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Put