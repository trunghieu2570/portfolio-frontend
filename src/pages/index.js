import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import MyImage from '../images/image.jpg';
import GithubRepoList from "../components/github-repo-list";

const IndexPage = ({ data }) => (
  <Layout>
    <section className='about-head-section'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-8'>
            <h1>Tran Trung Hieu</h1>
            <h2>Software Engineer</h2>
            <p>
              I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
              I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.
              </p>
            <button className='btn btn-primary'>View Resume</button>
          </div>
          <div className='col-4'>
            <img className="img-fluid" src={MyImage} />
          </div>
        </div>

      </div>
    </section>
    <section className='about-main-section py-4'>
      <div className='container'>
        <h1>Feature Projects</h1>
        <a href="https://github.com/trunghieu2570/calories">
          <img src="https://gh-card.dev/repos/trunghieu2570/calories.svg"/>

          </a>
          <GithubRepoList/>
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
      </div>
    </section>
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