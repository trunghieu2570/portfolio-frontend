import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

const ProjectTemplate = ({ data }) => (
	<Layout>
		<Helmet>
			<meta charSet="utf-8" />
			<title>{data.strapiProject.name}</title>
			{/* <link rel="canonical" href="http://mysite.com/example" /> */}
		</Helmet>
		<div className="project">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-12 col-lg-8 col-md-10">
						<Img className="mb-5" fluid={data.strapiProject.feature_img.childImageSharp.fluid} />
						<h1 className="project-name text-center">{data.strapiProject.name}</h1>
						{/* <p className="project-description my-4">{data.strapiProject.description}</p> */}
						<div className="project-case-study mt-5 mb-5">
							<ReactMarkdown source={data.strapiProject.case_study} />
						</div>
					</div>

				</div>

			</div>
		</div>

	</Layout>
)
export default ProjectTemplate
export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProject(id: { eq: $id }) {
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
`