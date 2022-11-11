import React, { useEffect, useState } from 'react';
import Posts from './Posts';

const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://dummyapi.io/data/v1/post', {
            method: 'GET',
            headers: {
                'app-id': '636eaf649fc5506770d1d97e'
            }
        }).then(res => res.json())
            .then(data => {
                setPosts(data.data)
            })
    }, [posts])
    return (
        <div>
            <h1>Hello world</h1>
            {posts.map((post) => <Posts
                key={post.id}
                post={post}
            ></Posts>
            )}
        </div>
    );
};

export default Home;