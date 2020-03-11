import React from 'react'
import '../scss/common.scss'

const Post = ({ post, setPosts, setNotification, posts, history }) => {
    const handleDeletePost = (id) => {
        const deletedPost = posts.find(post => post.id === id)
        if (window.confirm(`Delete '${deletedPost.title}' ?`)) {
            const newPosts = posts.filter(post => {
                return post.id !== deletedPost.id
            })
            setNotification(`'${deletedPost.title}' deleted!`)
            setPosts(newPosts)
            history.push('/')
            setTimeout(() => {
                setNotification('')
            }, 5000)
        }
    }

    const handleCancel = () => {
        history.push('/')
    }

    return (
        <div className="container">
            <h3>Title: {post.title}</h3>
            <h4>Category: {post.category}</h4>
            <p>{post.content}</p>
            <button onClick={() => { handleDeletePost(post.id) }}>delete</button>
            <button onClick={handleCancel}>back to posts</button>
        </div>
    )
}

export default Post

