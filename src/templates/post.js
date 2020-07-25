import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const PostTemplate = ({ data }) => (
  <Layout>
    
    <div className="post">
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="post-title text-center">{data.strapiPost.title}</h1>
            <p className="post-description my-3">{data.strapiPost.description}</p>
            <p className="post-date">{'Published at '}<Moment format="MMMM DD, YYYY">{data.strapiPost.updatedAt}</Moment></p>
            <Img fluid={data.strapiPost.image.childImageSharp.fluid} />
            <div className="post-content mt-4">
              <ReactMarkdown source={data.strapiPost.content} />
            </div>
          </div>

        </div>

      </div>
    </div>

  </Layout>
)
export default PostTemplate
export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      content
      description
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
          }
        }
    }
  }
`