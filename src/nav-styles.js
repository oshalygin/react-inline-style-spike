import config from "./config-styles.js";

const button = {
    flex: 1,
    height: config.imageHeight,
    padding: 20,
    fontSize: 50,
    background: "transparent",
    color: "#fff",
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
    border: "none",
    outline: 0,
    cursor: "pointer",
    userSelect: "none"
};

const hidden =  {
    visibility: "hidden"
};

const prev = {
    ...button,
    textAlign: "left"

};

const next = {
...button,
    textAlign: "right"
};

export default {
    root: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex"
    },
    prev,
    prevHidden: {
        ...prev,
        ...hidden
    },
    next,
    nextHidden: {
        ...next,
        ...hidden
    }

};
