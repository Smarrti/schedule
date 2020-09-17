import React from "react"
import { Spin } from "antd"
import classes from "./style.module.css"

const Spinner = () => {
  return (
    <div className={classes.spin}>
      <Spin />
    </div>
  )
}

export { Spinner }
