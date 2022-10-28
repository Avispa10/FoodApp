import { Input } from "../../UI/input/Input";
import classes from "./MealItemForm.module.css";
import { useState } from "react";

export const MealItemForm = (props) => {
  console.log(props);
  const [count, setcount] = useState();
  return (
    <>
      <form action="" className={classes.form}>
        <Input
          input={{
            id: props.id,
            type: "number",
            min: 1,
            max: 5,
            defaultValue: 0,
          }}
          label="Amount"
          onChange={() => {}}
        />
        <button>+ Add</button>
      </form>
    </>
  );
};
