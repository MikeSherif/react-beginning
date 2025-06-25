import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return (
        <>
            <h1 style={{textAlign: "center" , color: "#171d42"}}>{title}</h1>
            <ul className="postList">
                {posts.map(post =>
                    <PostItem post={post} key={post.id}/>
                )}
            </ul>
        </>
    );
};

export default PostList;