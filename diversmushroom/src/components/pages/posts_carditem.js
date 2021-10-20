import React from 'react';
import { Link } from 'react-router-dom'

function PostCardItem(props) {
    return (
        <>
            	
            	<div class="post_item" href="{props.path}">
            	    <div class="post_label">{props.label}</div>
            		<img src={props.src} alt="Article Image" class="post_img" />
            		<div class="post_text">
            			<h3>{props.text}</h3>
            			<p>{props.subtext}</p>
            		</div>
            	</div>
        </>
)}

export default PostCardItem
