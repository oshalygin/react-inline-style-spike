import React from 'react';
import Radium from 'radium';

import styles from './carousel-styles';

const { node, number } = React.PropTypes;

function renderSlides(props) {
  return React.Children.map(props.children, (slide, iterator) => {
    return React.cloneElement(slide, {
      style: {
        ...slide.props.style,
      width: props.width,
      left: props.width * (iterator - props.showIndex)
      }
    });
  });
}

function Carousel(props) {
  return (
    <div style={styles.root}>
      {renderSlides(props)}
      {props.nav}
    </div>
  );
}

Carousel.propTypes = {
  nav: node.isRequired,
  showIndex: number,
  width: number
};

export default Radium(Carousel);
