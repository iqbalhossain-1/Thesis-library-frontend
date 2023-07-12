import { Card } from "react-bootstrap";
import React from 'react';
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { _id, title, description } = blog;
    return (
        <div>
            <div className="col-md-3 my-2">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {
                                description.length < 250 ? <>{description}</> :
                                    <>
                                        {description.slice(0, 250)} <Link to={`/blogdescription/${_id}`}>...Read More</Link>

                                    </>


                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Blog;