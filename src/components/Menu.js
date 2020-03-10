import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    const padding = { padding: 10 }
    return (
      <div>
        <Link style={padding} to='/'>posts</Link>
        <Link style={padding} to='/addPost'>add a post</Link>
      </div>
    )
}

export default Menu