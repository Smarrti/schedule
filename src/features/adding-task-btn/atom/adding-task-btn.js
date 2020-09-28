import React, { useContext } from "react";
import { MyButton } from "@ui";
import { Role } from "@lib/roles";

export const AddingTaskBtn = ({
  isModalForAddingTaskVisible, toggleModalForAddingTaskVisible
}) => {
  const { user } = useContext(Role);
  return (
    <MyButton
      text="Добавить задачу"
      type="primary"
      onClick={() => toggleModalForAddingTaskVisible(!isModalForAddingTaskVisible)}
    />
  )
}

