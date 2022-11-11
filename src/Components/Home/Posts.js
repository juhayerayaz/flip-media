import React from 'react';

const Posts = (post) => {
    const { id, likes } = post.post;
    console.log(post)
    return (
        <div>
            <h1>Id: {id}</h1>
        </div>
    );
};

export default Posts;