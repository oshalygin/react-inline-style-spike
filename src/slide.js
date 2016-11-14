import React from "react";

const { object, string, any } = React.PropTypes;

function Slide(props) {
  return (
    <article style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer>
        <h2>{props.title}</h2>
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

export default Slide;
