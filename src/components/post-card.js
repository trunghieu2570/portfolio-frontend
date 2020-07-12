import React from 'react'
import { Link } from 'gatsby';
import Img from "gatsby-image";

export const PostCard = (props) => {
    if (!props.item) {
        return;
    }
    const {
        id,
        title,
        slug,
        description,
        image,
        status,
        category,
    } = props.item;
    console.log(image);
    return (
        <div className="post-card">
            <div className="card-wrapper">
                {
                    image &&
                    <Img className="card-background" fluid={image.childImageSharp.fluid} />
                }
                <div className="card-content pt-3">
                    <div>
                        <h2>
                            <Link to={`/${id}`}>{title}</Link>
                        </h2>
                        <p>{description}</p>
                        <Link to="#!">Read more...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
