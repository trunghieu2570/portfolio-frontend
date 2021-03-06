module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: `${process.env.STRAPI_HOST}`,
				contentTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					"post",
					"project",
					"milestone",
					"skill",
					"user",
				],
				singleTypes: [
					"config",
				],
				queryLimit: 1000,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `trunghieu-portfolio`
			}
		},
		{
			resolve: `gatsby-source-github-api`,
			options: {
				// url: API URL to use. Defaults to  https://api.github.com/graphql
				token: `${process.env.GITHUB_TOKEN}`,
				graphQLQuery: `
				query {
				viewer {
					name
					avatarUrl
					isHireable
					resourcePath
					repositories(last: 5, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
					nodes {
						name
						description
						homepageUrl
						forkCount
						createdAt
						updatedAt
						resourcePath
						languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
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
				`
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
