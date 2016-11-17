import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './frame.css';

const Frame = ({ children }) => { //eslint-disable-line
  return <div className={styles.root}>{children}</div>;
};

export default CSSModules(Frame, styles);
