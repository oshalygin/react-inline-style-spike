import Radium from "radium";
import config from "./config-styles.js";

const pulse = Radium.keyframes({
    "0%": {
        transform: "scale3d(1,1,1)"
    },
    "15%": {
        transform: "scale3d(1.05,1.05,1.05)"
    },
    "100%": {
        transform: "scale3d(1,1,1)"
    }
}, "Nav");

const button = {
    flex: 1,
    height: config.imageHeight,
    padding: 30,
    verticalAlign: "top",
    fontSize: 50,
    background: "transparent",
    color: "#FFF",
    textShadow: "1px 1px 3px rgba(0,0,0,.6)",
    border: "none",
    outline: 0,
    cursor: "pointer",
    userSelect: "none",
    animation: `${pulse} 4s 2s infinite`,
    ":hover": {
        transition: "all .5s",
        color: "#8c9ea3"
    }
};

const prev = {
    ...button,
    textAlign: "left"
};

const next = {
    ...button,
    textAlign: "right"
};

const hidden = {
    visibility: "hidden"
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
    next,
    prevHidden: {
        ...prev,
        ...hidden
    },
    nextHidden: {
        ...next,
        ...hidden
    }
};
