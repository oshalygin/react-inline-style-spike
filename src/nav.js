import React from 'react';
import CSSModules from 'react-css-modules';
const { func, bool } = React.PropTypes;
import styles from './nav.css';

// function getPreviousStyles(props) {
//   return props.hasPrevious ? styles.prev : styles.prevHidden;
// }

// function getNextStyles(props) {
//   return props.hasNext ? styles.next : styles.nextHidden;
// }

function Nav(props) {
  console.log(props)
  return (
    <div className={styles.root}>
      <button key='prev' className={styles.prev} onClick={() => props.onPrevious}>&#10094;</button>
      <button key='next' className={styles.next} onClick={() => props.onNext}>&#10095;</button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
};

export default CSSModules(Nav, styles);
