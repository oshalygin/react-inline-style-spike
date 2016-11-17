import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './slides.css';

const { object, string, any } = React.PropTypes;

function Slide(props) {
  return (
    <article className={styles.root}>
      <img src={props.image} alt={props.title} />
      <footer className={styles.footer}>
        <h2 className={styles.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: string.isRequired,
  style: object,
  title: string,
  children: any
};

export default CSSModules(Slide, styles);
