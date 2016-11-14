import React from "react";
import styles from "./nav-styles";

function getPreviousStyles(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden;
}

function getNextStyles(props) {
  return props.hasNext ? styles.next : styles.nextHidden;
}

const { func, bool } = React.PropTypes;

function Nav(props) {
  return (
    <div style={styles.root}>
      <button style={getPreviousStyles(props)} onClick={props.onPrevious}>&#10094;</button>
      <button style={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
};

export default Nav;
