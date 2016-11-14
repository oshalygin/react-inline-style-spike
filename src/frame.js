import React from "react";

import styles from "./frame-styles";


export default function Frame({ children }) { //eslint-disable-line
  return <div style={styles.root}>{children}</div>;
}
