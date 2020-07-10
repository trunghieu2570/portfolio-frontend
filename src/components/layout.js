/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
//import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "./sideNav"
import NavBar from "./nav-bar"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			{/* <SideNav /> */}
			<NavBar/>
			<div className="main-wrapper">
				{children}
				<footer>
					© {new Date().getFullYear()}, Built with
          			{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
