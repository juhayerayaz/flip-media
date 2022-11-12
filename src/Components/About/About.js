import React from 'react';
import { FaGithub, FaLinkedin, FaChrome } from 'react-icons/fa'

const About = () => {
    return (
        <div className='container p-6 md:p-12'>
            <h1 className='text-center text-4xl'>About me</h1>
            <div className='mx-auto text-lg md:w-[800px]'>
                <p className='text-lg my-9'>I am Juhayer Aiaz a passionate web developer. I have completed a Diploma in CSE(4 years). I have expertise in advanced HTML & CSS, CSS frameworks, SASS, JavaScript, React, MongoDB, Express js, Node.Js, JWT. I am confident enough that I can make a good contribution and impact in this sector.</p>
                <p className='text-xl font-semibold my-2'>Name: <span className='text-[#979c62] ml-3'>Juhayer Aiaz</span></p>
                <p className='text-xl font-semibold my-2'>Email: <span className='text-[#979c62] ml-3'>aiaz97@gmail.com</span></p>
                <p className='text-xl font-semibold my-2'>Phone: <span className='text-[#979c62] ml-3'>+8801302311163</span></p>
                <div className='flex items-center'>
                    <a className='text-sky-500 mr-2 flex items-center' target={'_blank'} href="https://github.com/juhayerayaz" rel="noreferrer"><FaGithub className='mr-2' /> GitHub</a>
                    <a className='text-sky-500 mr-2 flex items-center' target={'_blank'} href="https://www.linkedin.com/in/juhayer-ayaz/" rel="noreferrer"><FaLinkedin className='mr-2' /> LinkedIn</a>
                    <a className='text-sky-500 mr-2 flex items-center' target={'_blank'} href="https://juhayer-aiaz.netlify.app/" rel="noreferrer"><FaChrome className='mr-2' />Portfolio</a>
                </div>
            </div>
        </div>
    );
};

export default About;