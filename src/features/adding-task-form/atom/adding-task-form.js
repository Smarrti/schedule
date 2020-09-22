import React, { useContext } from "react";
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  InputNumber,
  Select,
  Button,
} from "antd";
import { WindowModal } from "@features/modal";
import { Role } from "@lib/roles";
import { handleAddingTaskForm } from "../model/adding-task-form";
const { Option } = Select;

export const AddingTaskForm = ({
  isModalForAddingTaskVisible,
  toggleModalForAddingTaskVisible,
}) => {
  const { user } = useContext(Role);
  const rulesOfInput = [
    {
      required: true,
      message: "Пожалуйста заполните данное поле!",
    },
  ];
  const modalProperties = {
    title: "Добавить задачу",
    visible: isModalForAddingTaskVisible,
    onCancel: () => toggleModalForAddingTaskVisible(false),
    footer: [
      <Button
        key="close"
        onClick={() => toggleModalForAddingTaskVisible(false)}
      >
        Закрыть
      </Button>,
    ],
  };
  const modalContent = (
    <Form
      name="addingTaskForm"
      preserve={false}
      onFinish={(values) => {
        handleAddingTaskForm(values);
        toggleModalForAddingTaskVisible(false);
      }}
    >
      <Form.Item label="Название задачи" name="name" rules={rulesOfInput}>
        <Input />
      </Form.Item>
      <Form.Item label="Дата" name="date" rules={rulesOfInput}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Время" name="time" rules={rulesOfInput}>
        <TimePicker format="HH:mm" />
      </Form.Item>
      <Form.Item
        label="Продолжительность в часах"
        name="duration"
        rules={rulesOfInput}
      >
        <InputNumber min={1} max={10} />
      </Form.Item>
      <Form.Item label="Лектор" name="author" rules={rulesOfInput}>
        <Input />
      </Form.Item>
      <Form.Item label="Формат" name="format" rules={rulesOfInput}>
        <Select>
          <Option value="lection">Лекция</Option>
          <Option value="practik">Практическое занятие</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Теги (через запятую)" name="tags" rules={rulesOfInput}>
        <Input />
      </Form.Item>
      <Form.Item label="Место" name="place" rules={rulesOfInput}>
        <Input />
      </Form.Item>
      <Form.Item label="Доп. материалы" name="materials">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Создать задачу
        </Button>
      </Form.Item>
    </Form>
  );
  return (
    <>
      {!user ? (
        <WindowModal properties={modalProperties} content={modalContent} />
      ) : null}
    </>
  );
};
