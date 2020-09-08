import React from "react"
import { MyButton } from "@ui"
import { handleDelete } from "../model/delete-item"

const DeleteButton = ({ id }) => {
  return (
    <MyButton
      text="Удалить"
      type="primary"
      danger
      onClick={() => handleDelete(id)}
    />
  )
}

export { DeleteButton }
