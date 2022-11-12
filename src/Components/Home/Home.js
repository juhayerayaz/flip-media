import React, { useEffect, useState } from 'react';
import Post from './Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [handlebtn, setHandlebtn] = useState(false)
    const increaseLimit = () => {
        const addLimit = limit + 5;
        if (addLimit >= 25) {
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
                    handlebtn === true ? <p className='text-error mt-3'>Cant show more than 20 here</p> : <></>
                }
            </div>
        </div>
    );
};

export default Home;