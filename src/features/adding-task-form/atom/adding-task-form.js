import React from 'react';
import { 
  Modal, 
  Form, 
  Input, 
  DatePicker, 
  TimePicker, 
  InputNumber,
  Select,
  Button
} from 'antd';
import { handleAddingTaskForm } from '../model/adding-task-form';
const { Option } = Select;

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
      footer={[
        <Button
          key="close"
          onClick={() => toggleModalForAddingTaskVisible(false)}
        >
          Закрыть
        </Button>
      ]}
    >
      <Form
        name="addingTaskForm"
        preserve={false}
        onFinish={(values) => handleAddingTaskForm(values)}
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
          label="Место"
          name="placeOfTask"
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
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Создать задачу
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  )
}