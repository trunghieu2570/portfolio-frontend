/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Img from "gatsby-image";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
//import 'bootstrap/dist/css/bootstrap.css';
//import SideNav from "./sideNav"
import NavBar from "./nav-bar"

const Layout = (props) => {
	const q = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
	  }
	  strapiConfig {
		  footer
	}
    }
  `)

	return (
		<>
			{/* <SideNav /> */}
			<NavBar homePage={props.homePage} />
			<div className="main-wrapper">
				{props.children}
				<footer>
					<div className="container py-4">
						{q.strapiConfig.footer}
					</div>

				</footer>
			</div>

		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout