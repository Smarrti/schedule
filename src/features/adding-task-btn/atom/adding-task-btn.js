import React from 'react';
import { MyButton } from "@ui";

export const AddingTaskBtn = ({ 
  isModalForAddingTaskVisible, toggleModalForAddingTaskVisible
}) => {
  return (
    <MyButton 
      text="Добавить задачу"
      type="primary"
      onClick={() => toggleModalForAddingTaskVisible(!isModalForAddingTaskVisible)}
    />
  )
}