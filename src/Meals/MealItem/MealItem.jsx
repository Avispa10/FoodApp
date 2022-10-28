import React from "react";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props) => {
  console.log(props);
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.title}</h3>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.price}>${props.price}</div>
        </div>
        <MealItemForm id={props.id} />
      </li>
    </>
  );
};
