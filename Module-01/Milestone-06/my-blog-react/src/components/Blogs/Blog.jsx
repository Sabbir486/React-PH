import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    // console.log(handleBookmark);
    

    const {cover, title, author, img} = blog;

    return (
        <div className='m-2 border'>
            {/* <h1>Single Blog: {id}</h1> */}

            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src={cover}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="author flex justify-around items-center">
                    <h3>{author}</h3>
                    <img className='w-16' src={img} alt="" />
                </div>
                
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="flex">
                    {
                        blog.hashtags.map(hash => <p>{hash}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                
                <button onClick={() => handleBookmark(blog)}><FaBookmark  size={30} /></button>    

                <button onClick={() => handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary">mark as read</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;