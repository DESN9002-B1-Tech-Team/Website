import React from 'react';
import PostItem from './PostItem'


function posts(props){
    return(
        <>
            <div className='Posts' bg = "../images/mushroom-biggest.jpg">
                <PostItem
                    title = {props.title}
                    summary = {props.summary}
                    src = {props.src}
                    data = {props.data} />
            </div>
        </>
    )
}

export default posts;