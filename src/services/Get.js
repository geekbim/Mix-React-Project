import Axios from "axios"
import {OnlinePath, RootPath} from './Config'

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${root ? OnlinePath : RootPath}/${path}`)
        .then((res) => {
            console.log(res)
            resolve(res.data)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Get