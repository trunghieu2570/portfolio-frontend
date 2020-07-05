import React from "react"
import { StaticQuery, graphql } from "gatsby"

const GithubRepoList = () => (
  <StaticQuery
    query={graphql`
      {
        githubData {
          data {
            viewer {
              avatarUrl
              isHireable
              repositories {
                nodes {
                  name
                  description
                  homepageUrl
                  resourcePath
                  forkCount
                  createdAt
                  updatedAt
                  languages {
                    edges {
                      node {
                        name
                        color
                      }
                    }
                  }
                  licenseInfo {
                    name
                  }
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default GithubRepoList;