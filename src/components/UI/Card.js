import React from "react";

import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; //U PROPS.CHILDREN SE NALAZI KONTENT KOJI SE NALAZI IZMEDJU <CARD></CARD>
}

export default Card;
