const path = require(`path`);

exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allDatoCmsCase {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  data.allDatoCmsCase.edges.forEach(edge => {
    const slug = edge.node.slug;

    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/case.tsx`),
      context: {
        id: edge.node.id,
      },
    });
  });
};
