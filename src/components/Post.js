import React from 'react'

const Post = ({ post }) => {
    return (
        <div>
            <h3>Title: {post.title}</h3>
            <h4>Category: {post.category}</h4>
            <p>{post.content}</p>
        </div>
    )
}

export default Post

