import React from 'react';
import { 
  Modal, 
  Form, 
  Input, 
  DatePicker, 
  TimePicker, 
  InputNumber,
  Select
} from 'antd';
const { Option } = Select;
// import { handleAddingTaskForm } from '../model/adding-task-form';

export const AddingTaskForm = ({ 
  isModalForAddingTaskVisible, toggleModalForAddingTaskVisible
}) => {
  const rulesOfInput = [{
    required: true,
    message: 'Пожалуйста заполните данное поле!'
  }];

  return (
    <Modal
      title="Добавить задачу"
      visible={isModalForAddingTaskVisible}
      onOk={() => toggleModalForAddingTaskVisible(false)}
      onCancel={() => toggleModalForAddingTaskVisible(false)}
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
        <Form.Item
          label="Время"
          name="timeOfTask"
          rules={rulesOfInput}
        >
          <TimePicker
            format="HH:mm"
          />
        </Form.Item>
        <Form.Item
          label="Продолжительность в часах"
          name="durationOfTask"
          rules={rulesOfInput}
        >
          <InputNumber 
            min={1}
            max={10}
            defaultValue={1}
          />
        </Form.Item>
        <Form.Item
          label="Лектор"
          name="lecturerOfTask"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Формат"
          name="formatOfTask"
          rules={rulesOfInput}
        >
          <Select>
            <Option value="lection">Лекция</Option>
            <Option value="practik">Практическое занятие</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Теги (через запятую)"
          name="tagsOfTask"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Доп. материалы"
          name="materialsOfTask"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}