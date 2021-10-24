import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../../App.css'
import './posts.css';
import PostCardItem from './posts_carditem';
import postDetails from '../../data/postDetails'; 


function Posts() {
    return (
        <>
        	<div className="posts_body">
           		<h1>All Posts</h1>

           		<div className='post_container'>
           		 	<input type="text" className="search_bar" placeholder="Search for an article" />           			

            		<div className='post_wrapper'>
            		
            			<div className="post_items"> 
							<ShowPosts />
            			</div>
            			
           			</div>
        		</div>

            </div>
        </>
    )
}


function ShowPosts() {
	 
	return postDetails.map( (value, index, array) => (
		<PostCardItem 
			src = {value.src}
			text = {value.text}
			label = {value.label}
			path = {value.path}
			subtext = {value.subtext}
			color = {(value.label === "Tutorial") ? "green" : "blue"}
		/>	
	))

}




function Fetch() {
	return (
		<InfiniteScroll
  			dataLength={postDetails.length}
 			hasMore={true}
			next={ShowPosts}
 			loader={<h4>Loading...</h4>}
 			scrollableTarget="post_items"
  			endMessage={
    			<p style={{ textAlign: 'center' }}>
      			<b>Yay! You have seen it all</b>
    			</p>
  			}
  			className="post_items"
		>
  			{postDetails.map( (src, text, label, path, subtext) => (
				<PostCardItem 
					src = {postDetails.src}
					text = {postDetails.text}
					label = {postDetails.label}
					path = {postDetails.path}
					subtext = {postDetails.subtext}
				/>	
			))}
		</InfiniteScroll>
	
	)
}

export default Posts;
