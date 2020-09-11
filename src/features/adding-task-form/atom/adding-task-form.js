import React from 'react';
import { Modal, Form, Input, DatePicker } from 'antd';
// import { handleAddingTaskForm } from '../model/adding-task-form';

export const AddingTaskForm = ({ 
  isModalForAddingTaskVisible, toggleModalForAddingTaskVisible
}) => {
  const rulesOfInput = [{
    required: true,
    message: 'Пожалуйста заполните данное поле!'
  }]
  return (
    <Modal
      title="Добавить задачу"
      visible={isModalForAddingTaskVisible}
    >
      <Form
        name="addingTaskForm"
        preserve={false}
      >
        <Form.Item
          label="Название задачи"
          name="nameOfTask"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Дата"
          name="dateOfTask"
          rules={rulesOfInput}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  )
}