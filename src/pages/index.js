import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import MyImage from '../images/image.jpg';
import DevImg from '../images/dev.png';
import GithubRepoList from "../components/github-repo-list";
import { ProjectCard } from "../components/project-card";
import { PostCard } from "../components/post-card";
import Img from "gatsby-image";
import HBackImg from "../images/aerial-photo-of-sky-691901.jpg";

const IndexPage = ({ data }) => (
	<Layout homePage>
		<section id="home" className='about-head-section'>
			<Img className="h-background" fluid={data.imgback.childImageSharp.fluid} />
			<div className='h-content container py-5 h-100 d-flex justify-content-center'>
				<div className="text-center align-self-center">

					<h1 className="big-size-title">Tran Trung Hieu</h1>
					<h2>Software Engineer</h2>
					<button className='btn btn-primary mt-2'>View Resume</button>
					{/* <img className="img-fluid" src={MyImage} /> */}
				</div>


			</div>
		</section>
		<section id="resume" className='about-main-section h-100 py-4'>
			<div className='container h-100 d-flex justify-content-center'>
				<div className="text-center align-self-center">
					<h1 className="title-heading">My Skills</h1>
					<div className="d-flex justify-content-center">
						<img src="https://img.icons8.com/color/192/000000/html-5.png" />
						<img src="https://img.icons8.com/color/192/000000/css3.png" />
						<img src="https://img.icons8.com/color/192/000000/react-native.png" />
						<img src="https://img.icons8.com/color/192/000000/javascript.png" />
						<img src="https://img.icons8.com/color/192/000000/flutter.png" />
						<img src="https://img.icons8.com/color/192/000000/java-coffee-cup-logo.png" />
					</div>
				</div>


			</div>
		</section>

		<section id="exp" className='about-main-section h-100 py-4'>
			<div className='container h-100 d-flex justify-content-center'>
				<div className="text-center align-self-center w-100">
					<h1 className="title-heading">My Experiences</h1>
					<div className="row pt-5">
						<div className="col-6 align-self-center">
							<ul className="list-unstyled w-100 px-5">
								<li className="mb-5">
									<div className="text-left mb-2">
										Frontend
								</div>
									<div className="progress w-100" style={{ height: "10px" }}>
										<div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</li>
								<li className="mb-5">
									<div className="text-left mb-2">
										Web Backend
								</div>
									<div className="progress w-100" style={{ height: "10px" }}>
										<div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</li>
								<li className="mb-5">
									<div className="text-left mb-2">
										Mobile App
								</div>
									<div className="progress w-100" style={{ height: "10px" }}>
										<div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-6">
							<img alt="abc" src={DevImg} width="100%" height="100%" style={{ objectFit: "contain", overflow: "hidden" }} />
						</div>
					</div>
					<div className="d-flex justify-content-center">

					</div>
				</div>


			</div>
		</section>

		<section id="portfolio" className='about-main-section py-4'>
			<div className='container'>
				<div className="mt-2">
					<h1 className="title-heading">Portfolio</h1>
					<div className="card-deck">
						{data.allStrapiProject.edges.map(document => (
							<ProjectCard key={document.node.id} item={document.node} />
						))}
					</div>
				</div>
			</div>
		</section>

		{/* <section className='about-main-section py-4'>
			<div className='container'>
				<div>
					<h1 className="title-heading">Open Source Projects</h1>
					<GithubRepoList />
				</div>
			</div>
		</section> */}

		<section id="posts" className='about-main-section py-4'>
			<div className='container'>
				<div className="mt-2">
					<h1 className="title-heading">Lastest Posts</h1>
					<div className="row">
						{data.allStrapiPost.edges.map(document => (
							<div key={document.node.id} className="col-12 col-md-4">
								<PostCard item={document.node} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	</Layout>
)
export default IndexPage
export const pageQuery = graphql`
  query IndexQuery {
	imgback: file(relativePath: {eq: "aerial-photo-of-sky-691901.jpg"}) {
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
  }
`