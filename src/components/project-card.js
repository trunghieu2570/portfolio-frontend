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
        case_study,
        feature_img,
    } = props.item;
    return (
        <div className="project-card">
            <div className="card-wrapper">
                <Img className="card-background" fluid={feature_img.childImageSharp.fluid} />
                <div className="card-content-wrapper"></div>
                <div className="card-content d-flex justify-content-center">
                    <div className="align-self-center text-center">
                        <h2>
                            <Link to={`/${id}`}>{name}</Link>
                        </h2>
                        <p>{description}</p>
                        <button className="btn btn-outline-primary">View Case Study</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
