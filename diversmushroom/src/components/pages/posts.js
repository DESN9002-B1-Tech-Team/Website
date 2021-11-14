import React from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import '../../App.css'
import './posts.css';
import PostDetails from '../../data/postDetails';


function Posts() {
    return (
        <>
        	<div className="posts_body">
           		<h1>All Posts</h1>

           		<div className='post_container'>
           		 	<input type="text" className="search_bar" placeholder="Search for an article" />

            		<div className='post_wrapper'>

            			<div className="post_items">
							<PostDetails />
            			</div>

           			</div>
        		</div>

            </div>
        </>
    )
}


export default Posts;
