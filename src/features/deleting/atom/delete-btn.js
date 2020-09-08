import React from "react"
import { MyButton } from "@ui"

const DeleteButton = ({ id }) => {
  console.log(id)
  return <MyButton text="Удалить" danger />
}

export { DeleteButton }
