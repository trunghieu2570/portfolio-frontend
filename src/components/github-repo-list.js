import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GitHubCard from "./github-card";

const GithubRepoList = () => (
  <div className="card-deck">
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
      render={data => data.githubData.data.viewer.repositories.nodes.map(item => <GitHubCard key={item.name} item={item} />)
      }
    ></StaticQuery>
  </div>

)

export default GithubRepoList;