import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

const ProjectTemplate = ({ data }) => (
	<Layout>
		<div className="project">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<h1 className="project-name text-center mb-5">{data.strapiProject.name}</h1>
						{/* <p className="project-description my-4">{data.strapiProject.description}</p> */}
						<Img fluid={data.strapiProject.feature_img.childImageSharp.fluid} />
						<div className="project-case-study my-5">
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