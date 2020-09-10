import React from "react"
import { Radio, Form } from "antd"

const RadioGroup = ({ children, ...attrs }) => {
  return (
    <Form>
      <Form.Item>
        <Radio.Group {...attrs}>{children}</Radio.Group>
      </Form.Item>
    </Form>
  )
}

export { RadioGroup }
