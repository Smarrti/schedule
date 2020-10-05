import React from "react"
import { Button } from "antd"

const MyButton = ({ text, ...attrs }) => {
  return <Button {...attrs}>{text}</Button>
}

export { MyButton }
