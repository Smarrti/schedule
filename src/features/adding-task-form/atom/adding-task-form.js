import React from 'react';
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  InputNumber,
  Select,
  Button, Modal
} from 'antd';
import { handleAddingTaskForm } from '../model/adding-task-form';
import {actions, saveEvent, updateEvent} from "../../../lib/redux/eventsReducer";
import {useDispatch, useSelector} from "react-redux";
import {getEventChange} from "../../../lib/redux/selectors";
import moment from 'moment'
const { Option } = Select;

export const AddingTaskForm = ({
  isModalForAddingTaskVisible, toggleModalForAddingTaskVisible, formName
}) => {
  const [form] = Form.useForm();
  const eventChange = useSelector(getEventChange);
  const dispatch = useDispatch();
  const isUpdate = !!eventChange.id
  const rulesOfInput = [{
    required: true,
    message: 'Пожалуйста заполните данное поле!'
  }];
  const initValues = {
    name: eventChange.name,
    date: eventChange.date?moment(eventChange.date, "DD.MM.YYYY"):null,
    time: eventChange.time?moment(eventChange.time, "HH:mm"):null,
    duration: eventChange.duration,
    author: eventChange.author,
    format: eventChange.type,
    tags: eventChange.tags ? eventChange.tags.join(", ") : "",
    place: eventChange.place,
    material: eventChange.material
    }
  React.useEffect(() => {
    form.setFieldsValue(initValues);
  }, [eventChange, form, initValues]);
  const addEvent = (event) => {
    dispatch(saveEvent(event))
  }
  const update = (event, eventId) => {
    dispatch(updateEvent(event, eventId))
  }
  return (
    <Modal
      title={formName}
      visible={isModalForAddingTaskVisible}
      onCancel={()=>{toggleModalForAddingTaskVisible(false)
        dispatch(actions.setEventChange(null))}}
      footer={[
        <Button
          key="close"
          onClick={() => {toggleModalForAddingTaskVisible(false)
          }}
        >
          Закрыть
        </Button>
      ]}
    >
      <Form
        form = {form}
        name="addingTaskForm"
        preserve={false}
        onFinish={(values) => {
          handleAddingTaskForm(values, addEvent, update, isUpdate, eventChange.id);
          toggleModalForAddingTaskVisible(false);
          form.resetFields();

        }}
      >
        <Form.Item
          label="Название задачи"
          name="name"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Дата"
          name="date"
          rules={rulesOfInput}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Время"
          name="time"
          rules={rulesOfInput}
        >
          <TimePicker
            format="HH:mm"
          />
        </Form.Item>
        <Form.Item
          label="Продолжительность в часах"
          name="duration"
          rules={rulesOfInput}
        >
          <InputNumber
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item
          label="Лектор"
          name="author"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Формат"
          name="format"
          rules={rulesOfInput}
        >
          <Select>
            <Option value="lection">Лекция</Option>
            <Option value="practik">Практическое занятие</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Теги (через запятую)"
          name="tags"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Место"
          name="place"
          rules={rulesOfInput}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Доп. материалы"
          name="materials"
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
