import React from 'react'
import { Link } from 'gatsby';
import Img from "gatsby-image"

export const ProjectCard = (props) => {
    if (!props.item) {
        return;
    }
    const {
        id,
        name,
        description,
        //case_study,
        feature_img,
    } = props.item;
    return (
        <div className="row project-card m-0 mb-4">
            <div className="col-12 col-md-5 px-0">
                <Img className="card-background" fluid={feature_img.childImageSharp.fluid} />
            </div>
            <div className="col-12 col-md-7 card-content">
                <h3 className="project-title">
                    <Link to={`/${id}`}>{name}</Link>
                </h3>
                <p>{description}</p>
                <button className="btn btn-sm btn-outline-primary">View Case Study</button>
            </div>
        </div>

    )
}
