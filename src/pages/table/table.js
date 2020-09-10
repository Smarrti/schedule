import React, { useContext } from "react"
import { Table } from "antd"
import { MyTag } from "@ui"
import { DataContext } from "@lib/fetching"
import { DeleteButton } from "@features/deleting"
import { TableSizing } from "@features/sizing"
import { Size } from "@lib/sizing"
import { AddingTaskBtn } from "@features/adding-task-btn"
import './table.css';

const MyTable = () => {
  const data = useContext(DataContext)

  const { tableSize } = useContext(Size)

  const columns = [
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

  const expandable = {
    expandedRowRender: ({ id }) => <DeleteButton id={id} />,
  }

  return (
    <>
      <div className="table__settings">
        <TableSizing />
        <AddingTaskBtn />
      </div>
      <Table
        columns={columns}
        size={tableSize}
        expandable={expandable}
        dataSource={data}
      />
    </>
  )
}

export { MyTable }
