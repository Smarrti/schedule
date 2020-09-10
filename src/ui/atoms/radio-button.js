import React from "react"
import { Radio } from "antd"

const RadioButton = ({ value, text, ...attrs }) => {
  return (
    <Radio.Button value={value} {...attrs}>
      {text}
    </Radio.Button>
  )
}

export { RadioButton }
