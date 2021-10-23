import React from 'react';
import { Link } from 'react-router-dom';

function PostCardItem(props) {
    return (
        <>
            	
            	<div className="post_item" href="{props.path}">
            		<div className="post_label" style={{backgroundColor:"green"}}>{props.label}</div>
            		<img src={props.src} alt="Article Image" className="post_img" />
            		<div className="post_text">
            			<h3>{props.text}</h3>
            			<p>{props.subtext}</p>
            		</div>
            	</div>
        </>
)}

export default PostCardItem
