import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { MyTag } from "@ui"

const MyTable = () => {
  const [data, setData] = useState()

  const fetchData = () => {
    fetch("https://rs-react-schedule.firebaseapp.com/api/team/sh36team/events")
      .then((response) => response.json())
      .then((source) => setData(source.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

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

  const handleDelete = (id) => {
    fetch(
      `https://rs-react-schedule.firebaseapp.com/api/team/sh36team/event/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => console.log("done"))
      .catch(() => console.log("not done"))
  }

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (data) => (
          <button onClick={() => handleDelete(data.id)}>{data.id}</button>
        ),
      }}
      dataSource={data}
    />
  )
}

export { MyTable }
