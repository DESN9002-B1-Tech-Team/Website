import React from 'react';
import {Divider, Typography, Card, CardHeader, CardContent, CardMedia} from "@material-ui/core"; 
import './PostItem.css'
function PostItem(props){

    return(
        <>
            <Card className = "tutorial_page">
                <div className = "tutorial_container">
                    <Card>
                        <CardHeader
                            title = {props.title}
                            subheader = {props.summary}/> 
                        <Divider/>

                        <CardMedia
                            component="img"
                            width = "60%"
                            image={props.src}
                            alt="Tutorial_Media"/>
                        <CardContent>
                            <Typography variant="body4">{props.data}</Typography>
                        </CardContent>
                    </Card>
                </div>
            </Card>
        </>
    )
}

export default PostItem;
