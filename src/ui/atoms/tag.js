import React from "react"
import { Tag } from "antd"

const MyTag = ({ tags }) => {
  if (tags)
    return tags.map((item) => {
      return (
        <Tag key={item} color="geekblue">
          {item.toUpperCase()}
        </Tag>
      )
    })
}

export { MyTag }
