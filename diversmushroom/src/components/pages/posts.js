import React from 'react';
import '../../App.css'
import './posts.css';
import PostCard from './posts_card';


function Posts() {
    return (
        <>
        	<div class="posts_body">
           		<h1>All Posts</h1>
           		<PostCard />
            </div>
        </>
    )
}

export default Posts;
