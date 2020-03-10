import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({ posts }) => (
    <div>
        <h3>Posts</h3>
        <ul>
            {posts.map(post =>
                <li key={post.id}>
                    <h4><Link to={`/posts/${post.id}`}>{post.title}</Link></h4>
                    <p>{post.category}</p>
                </li>)}
        </ul>
    </div>
)

export default PostList