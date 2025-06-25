import React from 'react';

const PostItem = (props) => {

    return (
        <li className="post">
            <div className="post__content">
                <p>{props.post.id}. {props.post.title}</p>
                <p>{props.post.body}</p>
            </div>
            <div className="post__btns">
                <button className='post__btns-button'>Delete</button>
            </div>
        </li>
    );
};

export default PostItem;