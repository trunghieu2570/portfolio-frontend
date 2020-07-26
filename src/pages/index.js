import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GithubRepoList from "../components/github-repo-list";
import { ProjectCard } from "../components/project-card";
import { PostCard } from "../components/post-card";
import Img from "gatsby-image";
import Moment from "react-moment";

const IndexPage = ({ data }) => (
	<Layout homePage>
		<section id="home" className='about-head-section'>
			<Img className="h-background" fluid={data.imgback.childImageSharp.fluid} />
			<div className='h-content container h-100'>
				<div className="row align-items-center h-100">
					<div className="col-md-6 col-12">
						<h1>{data.strapiConfig.greetingTitle}</h1>
						<p className="h-description">{data.strapiConfig.greetingSubtitle}</p>
						<button className="btn btn-primary">Hire Me</button>
					</div>
					<div className="col-6">

					</div>
				</div>
			</div>
		</section>
		<section id="resume" className='resume-section container pt-5'>
			<div className="row">
				<div className="col-12 col-md-10">
					<h2 className="title-heading">Resume</h2>
					<p className="mb-5">{data.strapiConfig.resumeDescription}</p>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<h3 className="resume-title">Education & Employment</h3>
				</div>
				<div className="col-12 col-md-8">
					<div className="timeline">
						{data.allStrapiMilestone.edges.map(document => (
							<div className="timeline-block">
								<p className="timeline-title">{document.node.summary}</p>
								<p className="timeline-milestone">
									<Moment format="YYYY">{document.node.startDate}</Moment>{" - "}<Moment format="YYYY">{document.node.endDate}</Moment>
								</p>
								<p className="timeline-content">{document.node.content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h3 className="resume-title">General Skills</h3>
				</div>
				<div className="col-12 col-md-6">
					<ul className="list-unstyled w-100">
						{data.allStrapiSkill.edges.map(document => (
							<li className="mb-5">
								<div className="text-left mb-2">
									{document.node.name}
								</div>
								<div className="progress w-100" style={{ height: "8px" }}>
									<div className="progress-bar" role="progressbar" style={{ width: `${document.node.percentage}%` }} aria-valuenow={`${document.node.percentage}%`} aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</li>
						))}


					</ul>
				</div>
			</div>
		</section>

		<section id="portfolio" className='portfolio-section container pt-5 mt-2'>
			<div className="row">
				<div className="col-12">
					<h2 className="title-heading">Portfolio</h2>
				</div>
				{data.allStrapiProject.edges.map(document => (
					<div className="col-12" key={document.node.id} >
						<ProjectCard item={document.node} />
					</div>

				))}

			</div>

		</section>

		<section className='github-section container pt-4'>
			<div className="row">
				<div className="col-12">
					<h2 className="title-heading">Open Source Projects</h2>
				</div>
				<div className="col-12">
					<GithubRepoList />
				</div>

			</div>
		</section>

		<section id="posts" className='post-section container pt-5'>
			<div className="row">
				<div className="col-12">
					<h2 className="title-heading">Lastest Posts</h2>
				</div>
				{data.allStrapiPost.edges.map(document => (
					<div key={document.node.id} className="col-12 col-md-4">
						<PostCard item={document.node} />
					</div>
				))}
			</div>


		</section>
		<section id="contact" className='contact container pt-5'>
			<div className="text-center">
				<form method="post">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<h2 className="title-heading"><span>Contact</span></h2>
							<div className="form-group">
								<input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
							</div>
							<div className="form-group">
								<input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
							</div>


							<div className="form-group">
								<textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }} />
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-primary" value="Send Message" />
							</div>
						</div>

					</div>
				</form>
			</div>

		</section>
		<div className="py-3"></div>
	</Layout >
)
export default IndexPage
export const pageQuery = graphql`
  query IndexQuery {
	imgback: file(relativePath: {eq: "home-shape.png"}) {
		childImageSharp {
			fluid(maxWidth: 960) {
			  ...GatsbyImageSharpFluid
			}
		}
	  }
    allStrapiPost {
      edges {
        node {
          id
          title
		  description
		  updatedAt
		  image {
			childImageSharp {
				fluid(maxWidth: 960) {
				  ...GatsbyImageSharpFluid
				}
			  }
		  }
        }
      }
	}
	allStrapiProject {
		edges {
		  node {
			id
			name
			description
			case_study
			feature_img {
				publicURL
				childImageSharp {
					fluid(maxWidth: 960) {
					  ...GatsbyImageSharpFluid
					}
				  }
			}
		  }
		}
	}
	allStrapiMilestone(sort: {order: ASC, fields: startDate}) {
		edges {
		  node {
			id
			endDate
			startDate
			summary
			content
		  }
		}
	  }
	allStrapiSkill {
		edges {
			node {
			id
			name
			percentage
			}
		}
	}
	strapiConfig {
		greetingSubtitle
		greetingTitle
		resumeDescription
	}
  }
`