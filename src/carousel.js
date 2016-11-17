import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './carousel.css';

const { node, number } = React.PropTypes;

function renderSlides(props) {
  console.log(props)
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
    <div className={styles.root}>
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

export default Carousel;;
