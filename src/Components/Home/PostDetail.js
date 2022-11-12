import React, { lazy, useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const { text, likes, image, publishDate, owner, tags } = post;
    useEffect(() => {
        const url = `https://dummyapi.io/data/v1/post/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'app-id': '636eaf649fc5506770d1d97e'
            }
        })
            .then(res => res.json())
            .then(data => setPost(data));
    },)
    return (
        <div className='my-10 w-[350px] md:w-[650px] mx-auto'>
            <div className='card card-body shadow-md p-3'>
                <div className='mb-3'>
                    <img src={image} className='w-[300px] md:w-[600px] rounded' alt={text} loading={lazy} />
                </div>
                <div className='flex items-center my-3'>
                    {
                        tags?.map((tag) =>
                            <div
                                tag={tag}
                                key={id}
                            >
                                <button className='btn btn-base btn-xs mx-2'>{tag}</button>
                            </div>
                        )
                    }
                </div>
                <div className='md:ml-4'>
                    <h1 className='font-semibold text-xl'>{text}</h1>
                    <div className='flex items-center my-2'>
                        <img src={owner?.picture} className='rounded-full w-12 mr-3' alt="" />
                        <h2 className='text-lg font-semibold'>{owner?.title} {owner?.firstName} {owner?.lastName}</h2>
                    </div>
                    <div>
                        <p className='flex items-center float-right'><FcLike className='mr-2' /> {likes}</p>
                        <p className='text-slate-400'>{publishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;