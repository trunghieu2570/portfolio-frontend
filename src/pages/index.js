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
						<h1>Hello, I'm Hieu</h1>
						<p className="h-description">Donec dictum et quam non laoreet. Curabitur malesuada ornare enim, eu tempor urna varius ac. Donec mattis pulvinar porta. Nam elementum tempor convallis</p>
						<button className="btn btn-primary">Hire Me</button>
					</div>
					<div className="col-6">

					</div>
				</div>
			</div>
		</section>
		<section id="resume" className='resume-section container pt-5'>
			<div className="row">
				<div className="col-10">
					<h2 className="title-heading">Resume</h2>
					<p className="mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec dictum et quam non laoreet.
						Curabitur malesuada ornare enim, eu tempor urna varius ac.
						Donec mattis pulvinar porta.
						Nam elementum tempor convallis.
						Nunc blandit varius ante.
						Phasellus sed ante lobortis, laoreet eros a, placerat erat.
						Nunc egestas nisi at erat ornare, at consectetur enim laoreet.
						Praesent ut rhoncus dolor. Cras tristique in orci sed fringilla.
						Proin faucibus facilisis lorem ac blandit. Fusce eget est enim.
						Cras id elementum diam. Maecenas et eros ac nulla imperdiet euismod non id augue.
				</p>
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
		<div className="py-5"></div>
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
  }
`