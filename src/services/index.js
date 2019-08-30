import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete';

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComment = () => Get('comments', true)

// POST
const postNewsBlog = (data) => Post('posts', false, data)

// PUT
const putNewsBlog = (id, data) => Put(`posts/${id}`, false, data)

// DELETE
const deleteNewsBlog = (data) => Delete(`posts/${data}`, false)

const API = {
    getNewsBlog,
    getComment,
    putNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API