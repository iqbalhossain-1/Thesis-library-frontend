import React from "react";
import { useEffect } from "react";
import bg1 from '../assets/bg-1.jpg'
import { useLoaderData } from "react-router-dom";

const BlogDetail = () => {
    const { description, image, title } = useLoaderData();

    return (
        <div className="mt-5">
            <h3 className="text-center mb-4">{title}</h3>
            <div className="mb-5">
                <img className="d-flex mx-auto" src={image} style={{ height: '500px', width: '1200px' }} alt="" srcset="" />
            </div>
            <p align='justify' className="m-5">{description}</p>
        </div>
    );
};

export default BlogDetail;