import React, { Component, Fragment } from 'react'
import './Blog.css'
import Axios from 'axios'
import Content from './Content'
import API from '../../services'

class Blog extends Component {

    state = {
        konten: [],
        formBlogPost : {
            id: 1,
            userId: 1,
            title: '',
            body: ''
        },
        isUpdate: false,
        comments: []
    }

    // GET DATA
    getDataAPI = () => {
        API.getNewsBlog()
        .then((res) => {
            this.setState({
                konten: res
            })
        })
        API.getComment()
        .then((res) => {
            this.setState({
                comments: res
            })
        })
    }

    // POST DATA
    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost)
        .then((res) => {
            this.getDataAPI()
            this.setState({
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                }
            })
        })
        if (true) {
            window.alert('Data Berhasil Ditambahkan')
        }
    }

    // PUT DATA
    putDataToAPI = () => {
        API.putNewsBlog(this.state.formBlogPost.id, this.state.formBlogPost)
        .then((res) => {
            this.getDataAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                }
            })
        })
        if (true) {
            window.alert('Data Berhasil Diupdate')
        }
    }

    handleFormChange = (e) => {
        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp = new Date().getTime()
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[e.target.name] = e.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // HANDLE SUBMIT
    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    // HANDLE REMOVE
    handleRemove = (data) => {
        if (window.confirm('Yakin ingin menghapus data?')) {
            API.deleteNewsBlog(data)
            .then((res) => {
                this.getDataAPI()
            })
        }
    }

    // HANDLE UPDATE
    handleupdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleDetail = (postID) => {
        // untuk pindah halaman
        this.props.history.push(`/detail-post/${postID}`)
    }

    componentDidMount() {
        this.getDataAPI()
    }

    render() {
        return (
            <Fragment>
                <center>
                    <p className="mt-5">BLOG POST</p>
                    <hr/>
                    <div className="card mb-3 blog my-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title" className="float-left mt-3 px-3">Title</label>
                                <input type="text" className="form-control" name="title" id="title" placeholder="Add Title" autoComplete="off" value={this.state.formBlogPost.title} onChange={this.handleFormChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="body" className="float-left px-3">Blog Content</label>
                                <textarea type="text" className="form-control" name="body" id="body" rows="5" placeholder="Add Blog Content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                            </div>
                            <button type="button" className="btn btn-outline-primary float-left mb-3 mx-3" onClick={this.handleSubmit}>Simpan</button>
                        </form>
                    </div>
                    {
                        this.state.konten.map((konten) => {
                            return (
                                <Content key={konten.id} data={konten} remove={this.handleRemove} update={this.handleupdate} goDetail={this.handleDetail} />
                            )
                        })
                    }
                    <br/>
                    {
                        this.state.comments.map((comment) => {
                            return (
                                <p>{comment.name} - {comment.email}</p>
                            )
                        })
                    }
                </center>
            </Fragment>
        )
    }
}

export default Blog
