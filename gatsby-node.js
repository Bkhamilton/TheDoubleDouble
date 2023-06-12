/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query the blog post data from your data source
  const result = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MM/DD/YYYY")
            content {
              internal {
                content
              }
            }
            author {
              name
            }
            description {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  // Iterate over the queried blog post data and create a new page for each blog post
  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve('./src/templates/blog-post.js'),
      context: {
        node: node,
      },
    });
  });
};

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};