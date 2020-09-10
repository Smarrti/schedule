import React from 'react';
import { Modal } from 'antd';
// import { handleAddingTaskForm } from '../model/adding-task-form';

export const AddingTaskForm = ({ 
  isModalForAddingTaskVisible, toggleModalForAddingTaskVisible
}) => {
  
  return (
    <Modal
      title="Добавить задачу"
      visible={isModalForAddingTaskVisible}
    >

    </Modal>
  )
}