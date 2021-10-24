import React from 'react';
import { firestore } from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import PostCardItem from '../components/posts_carditem'

function PostDetails () {
    const postsRef = firestore.collection('posts');
    const query = postsRef.orderBy('createdAt').limit(10);

    const [posts] = useCollectionData(query, {idField: 'label'})


    return (
        <>{posts && posts.map(p => <PostCardItem
            src={p.src} text={p.text} label={p.label}
            path={p.path} subtext={p.subtext}
            color={(p.label === "Tutorial") ? "green" : "blue"} />)}</>
    );
}

export default PostDetails;
