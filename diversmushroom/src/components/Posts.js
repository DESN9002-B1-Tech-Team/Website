import React from 'react';
import PostItem from './PostItem'


function posts(){
    return(
        <>
            <div className='Posts'bg = "../images/mushroom-biggest.jpg">
                <PostItem
                    title = "Tutorial_Title"
                    summary = "This is a short summary for the tutorial"
                    src = "../images/mushroom-packaging.jpg"
                    data = "This is the text explanation for the tutorial video or image, this is the text explanation for the tutorial video or image, this is the text explanation for the tutorial video or image, this is the text explanation for the tutorial video or image, this is the text explanation for the tutorial video or image, this is the text explanation for the tutorial video or image." />
            </div>
        </>
    )
}

export default posts;