import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({ posts, setPosts }) => {
    const handleDeletePost = (id) => {
        const deletedPost = posts.find(post => post.id === id)
        const newPosts = posts.filter(post => {
            return post.id !== deletedPost.id
        })
        setPosts(newPosts)
    }
    return (

        <div>
            <h3>Posts</h3>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        <h4><Link to={`/posts/${post.id}`}>{post.title}</Link></h4>
                        <p>{post.category}</p>
                        <button onClick={() => { handleDeletePost(post.id) }}>delete</button>
                    </li>)}
            </ul>
        </div>
    )
}



export default PostList