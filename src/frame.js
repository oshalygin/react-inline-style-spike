import React from 'react';
import Radium from 'radium';

import styles from './frame-styles.js';

function Frame({ children }) { //eslint-disable-line
  return <div style={styles.root}>{children}</div>;
}

export default Radium(Frame);
