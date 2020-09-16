import React from "react"
import { RadioGroup } from "@ui"
import classes from "./radio-section.module.css"

const RadioSection = ({ title, children, ...rest }) => {
  return (
    <div className={classes.radio}>
      <h3>{title}</h3>
      <RadioGroup {...rest}>{children}</RadioGroup>
    </div>
  )
}

export { RadioSection }
