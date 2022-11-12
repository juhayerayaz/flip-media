import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [handlebtn, setHandlebtn] = useState(false)
    const increaseLimit = () => {
        const addLimit = limit + 10;
        if (addLimit >= 60) {
            setHandlebtn(true)
        }
        else {
            setLimit(addLimit)
        }
    }
    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/post?limit=${limit}`, {
            method: 'GET',
            headers: {
                'app-id': '636eaf649fc5506770d1d97e'
            }
        }).then(res => res.json())
            .then(data => {
                setPosts(data.data)
            })
    }, [limit])
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5 p-12'>
                {posts.map((post) => <Post
                    key={post.id}
                    post={post}
                ></Post>
                )}
            </div>
            <div className='text-center mb-5'>
                <button onClick={increaseLimit} className='btn btn-base' disabled={handlebtn}>Show more</button>
                {
                    handlebtn === true ? <p className='text-error mt-3'>Thats the max amount of post you can reach</p> : <></>
                }
            </div>
        </div>
    );
};

export default Posts;