import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import MyImage from '../images/image.jpg';
import DevImg from '../images/dev.png';
//import GithubRepoList from "../components/github-repo-list";
import { ProjectCard } from "../components/project-card";
import { PostCard } from "../components/post-card";
import Img from "gatsby-image";

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
		<section id="resume" className='resume-section container py-4'>
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
				<div className="col-8">
					<div className="timeline">
						<h3 className="resume-title">Education & Employment</h3>
						<div className="timeline-block">
							<p className="timeline-title">Học trường Đại học Công nghệ thông tin ĐHQG-TPHCM</p>
							<p className="timeline-milestone">2020-2021</p>
							<p className="timeline-content">
								fgfgsfgdf sgdfsgdfgf gsfgdfsgdf sgdfgfgsf gdfsgdfsgdf gfgsfgdfsgdf sgdfgf gsfgdf sgdfsgdfg fgsfgdfsg dfsgdfg fgsfgdfs gdfsgdf gfgsfgdfsg dfsgdfgf sgdfsgd
							</p>
						</div>
						<div className="timeline-block">
							<p className="timeline-title">werewrewrewr</p>
							<p className="timeline-milestone">2020-2021</p>
							<p className="timeline-content">fgfgsfgdfsgdfsgd</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h3 className="resume-title">General Skills</h3>
				</div>
				<div className="col-6">
					<ul className="list-unstyled w-100">
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
				{/* <div className="col-6 p-5">
					<img alt="abc" src={DevImg} width="100%" height="100%" style={{ objectFit: "contain", overflow: "hidden" }} />
				</div> */}
			</div>

			{/* <div className="text-center align-self-center">
					<div className="d-flex justify-content-center">
						<img alt='1' src="https://img.icons8.com/color/192/000000/html-5.png" />
						<img alt='1' src="https://img.icons8.com/color/192/000000/css3.png" />
						<img alt='1' src="https://img.icons8.com/color/192/000000/react-native.png" />
						<img alt='1' src="https://img.icons8.com/color/192/000000/javascript.png" />
						<img alt='1' src="https://img.icons8.com/color/192/000000/flutter.png" />
						<img alt='1' src="https://img.icons8.com/color/192/000000/java-coffee-cup-logo.png" />
					</div>
				</div> */}
		</section>

		<section id="portfolio" className='portfolio-section container py-4 mt-2'>
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
					<h2 className="title-heading">Lastest Posts</h2>
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
	</Layout >
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