import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

function renderImage(file) {
  return <Img fluid={file.node.childImageSharp.fluid} />;
}

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src))}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
