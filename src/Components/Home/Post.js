import React, { lazy } from 'react';
import { FcLike } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';

const Posts = (post) => {
    const { id, likes, image, publishDate, text } = post.post;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/posts/${id}`);
    }
    return (
        <div className='md:flex md:items-center card card-body shadow-md md:flex-row md:p-2 md:pr-4 p-3'>
            <div className='mb-3 md:mb-0'>
                <img src={image} className='md:h-[200px] rounded' alt={text} loading={lazy} />
            </div>
            <div className='md:ml-4'>
                <h1 className='font-semibold text-xl'>{text}</h1>
                <p className='flex items-center'><FcLike className='mr-2' /> {likes}</p>
                <p className='text-slate-400'>{publishDate}</p>
                <button onClick={() => navigateToItemDetail(id)} className='btn btn-base mt-4'>Details</button>
            </div>
        </div>
    );
};

export default Posts;