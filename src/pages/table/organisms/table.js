import React, { useContext } from "react"
import { Table } from "antd"
import { MyTag } from "@ui"
import { DataContext } from "@lib/fetching"
import { DeleteButton } from "@features/deleting"

const MyTable = () => {
  const data = useContext(DataContext)

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

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: ({ id }) => <DeleteButton id={id} />,
      }}
      dataSource={data}
    />
  )
}

export { MyTable }
