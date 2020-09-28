import React, {useContext, useEffect} from "react"
import {Button, Table} from "antd"
import {TableSizing} from "@features/sizing"
import {TableCustomization} from "@features/customization"
import {Size} from "@lib/sizing"
import {Style} from "@lib/customization"
import {useSelector, useDispatch} from "react-redux";
import {getEvents, getIsLoading, getModalForAddingTaskVisible, getRights} from "../../lib/redux/selectors";
import {actions, deleteEvent, requestEvents} from "../../lib/redux/eventsReducer";
import classes from "@features/customization/style.module.css"
import s from "../Header/header.module.css";
import tStyle from "./table.css"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import {MyTag} from "../../ui/atoms";

const MyTable = () => {
  const events = useSelector(getEvents);
  const isLoading = useSelector(getIsLoading);
  const isMentor = useSelector(getRights);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestEvents())
  }, [dispatch]);
  const {tableSize} = useContext(Size)
  const {table} = useContext(Style)
  const onDelete = (e)=> {
    dispatch(deleteEvent(e.currentTarget.dataset.key))
  }
  const isModalForAddingTaskVisible = useSelector(getModalForAddingTaskVisible);
  const toggleModalForAddingTaskVisible = (isOpen) => {
    dispatch(actions.setModalAddingTaskVisible(isOpen));
  }
  const onEdit = (e) => {
    dispatch(actions.setEventChange(e.currentTarget.dataset.key));
    toggleModalForAddingTaskVisible(!isModalForAddingTaskVisible);
  }
  const setRowStyleByType = (type, table) => {
    switch (type) {
      case "Лекция":
        return [
          classes[table.lecture.background],
          classes[table.lecture.fontColor],
        ]
      case "Практическое занятие":
        return [
          classes[table.practice.background],
          classes[table.practice.fontColor],
        ]
      default:
        return null
    }
  }
  const columns = [
    {
      title: 'Действия',
      key: 'action',
      sorter: false,
      className: isMentor?`show`:`hide`,
      render: (text, record) => {
        return <div>
          <Button data-key={record.id} className={s.editTask} size="large" type="default" icon={<EditOutlined/>} onClick={onEdit}></Button>
          <Button data-key={record.id} className={s.deleteTask} size="large" type="default" icon={<DeleteOutlined/>} onClick={onDelete}></Button>
        </div>
      },
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Время начала",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Длительность",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
      render: (name) => <a href="/#">{name}</a>,
    },
    {
      title: "Лектор",
      dataIndex: "author",
      key: "author",
      render: (author) => <a href="/#">{author}</a>,
    },
    {
      title: "Формат",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Теги",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => <MyTag tags={tags} />,
    },
    {
      title: "Доп. материалы",
      dataIndex: "optional",
      key: "optional",
      render: (optional) => <a href="/#">{optional}</a>,
    },
  ]
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <TableSizing/>
        <TableCustomization/>
      </div>
      <TaskPage 
        onPageClose={onPageClose}
        visible={taskPageVisible} 
        content={taskPageContent}/>
      <Table
        rowKey={events => events.id}
        columns={columns}
        size={tableSize}
        dataSource={events}
        rowClassName={(record) => setRowStyleByType(record.type, table)}
        scroll={{x: true}}
        loading = {isLoading}
      />
    </>
  );
};

export { MyTable };
