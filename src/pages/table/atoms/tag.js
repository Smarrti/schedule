import React from "react"
import { Tag } from "antd"

const MyTag = ({ type }) => {
  return <Tag color="geekblue">{type.toUpperCase()}</Tag>
}

export { MyTag }
