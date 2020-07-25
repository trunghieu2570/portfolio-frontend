import React from 'react'
import { Link } from 'gatsby';
import Img from "gatsby-image";
import Moment from 'react-moment';

export const PostCard = (props) => {
    if (!props.item) {
        return;
    }
    const {
        id,
        title,
        //slug,
        description,
        image,
        updatedAt,
        //status,
        //category,
    } = props.item;
    return (
        <div className="post-card">
            {
                image &&
                <Img className="card-background" fluid={image.childImageSharp.fluid} />
            }
            <div className="card-content pt-3">
                <h5>
                    <Link to={`/${id}`}>{title}</Link>
                </h5>
                <p className="post-date"><Moment format="MMMM DD, YYYY">{updatedAt}</Moment></p>
                <p>{description}</p>
                <Link to={`/${id}`}>→ Read more...</Link>
            </div>
        </div>
    )
}
