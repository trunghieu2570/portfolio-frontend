import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import MyImage from '../images/image.jpg';

const IndexPage = ({ data }) => (
  <Layout>
    <header>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-8'>
            <h1>Tran Trung Hieu</h1>
            <h2>Software Engineer</h2>
            <p>
              I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
              I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.
              </p>
          </div>
          <div className='col-4'>
            <img src={MyImage} />
          </div>
        </div>

      </div>

    </header>

    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
export default IndexPage
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`