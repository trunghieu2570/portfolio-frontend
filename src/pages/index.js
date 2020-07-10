import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import MyImage from '../images/image.jpg';
import DevImg from '../images/dev.png';
import GithubRepoList from "../components/github-repo-list";

const IndexPage = ({ data }) => (
	<Layout>
		<section className='about-head-section'>
			<div className='container py-5 h-100 d-flex justify-content-center'>
				<div className="text-center align-self-center">

					<h1 className="big-size-title">Tran Trung Hieu</h1>
					<h2>Software Engineer</h2>
					<button className='btn btn-primary mt-2'>View My Resume</button>
					{/* <img className="img-fluid" src={MyImage} /> */}
				</div>


			</div>
		</section>
		<section className='about-main-section h-100 py-4'>
			<div className='container h-100 d-flex justify-content-center'>
				<div className="text-center align-self-center">
					<h1 className="title-heading">What I Do</h1>
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

		<section className='about-main-section h-100 py-4'>
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
							<img alt="abc" src={DevImg} width="100%" height="100%" style={{objectFit: "contain", overflow:"hidden"}}/>
						</div>
					</div>
					<div className="d-flex justify-content-center">

					</div>
				</div>


			</div>
		</section>

		<section className='about-main-section py-4'>
			<div className='container'>
				<div>
					<h1 className="title-heading">Open Source Projects</h1>
					<GithubRepoList />
				</div>
				<div className="mt-2">
					<h1 className="title-heading">Lastest Posts</h1>
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
				</div>


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