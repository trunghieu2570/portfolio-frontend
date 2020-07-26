import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Helmet } from "react-helmet";
import { Disqus } from "gatsby-plugin-disqus"

const PostTemplate = ({ data }) => {
  let disqusConfig = {
    identifier: data.strapiPost.id,
    title: data.strapiPost.title,
  }
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.strapiPost.title}</title>

      </Helmet>
      <div className="post">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-lg-8 col-md-10">
              <h1 className="post-title text-center">{data.strapiPost.title}</h1>
              <p className="post-description my-3">{data.strapiPost.description}</p>
              <p className="post-date">{'Published at '}<Moment format="MMMM DD, YYYY">{data.strapiPost.updatedAt}</Moment></p>
              <Img fluid={data.strapiPost.image.childImageSharp.fluid} />
              <div className="post-content mt-4">
                <ReactMarkdown source={data.strapiPost.content} />
              </div>
              <div style={{ paddingBottom: "30px" }}></div>
              {/* <CommentCount config={disqusConfig} placeholder={'...'} /> */}
              <Disqus config={disqusConfig} />
            </div>

          </div>
          <div style={{ paddingBottom: "50px" }}></div>

        </div>
      </div>

    </Layout>
  );
}
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