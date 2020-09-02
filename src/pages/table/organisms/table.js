import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { MyTag } from "../../../ui"

const MyTable = () => {
  const [data, setData] = useState()
  const fetchData = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://rs-react-schedule.firebaseapp.com/api/team/sh36team/events"
    )
      .then((response) => response.json())
      .then((source) => setData(source.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    {
      title: "Начало",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Конец",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
      render: (name) => <a href="/#">{name}</a>,
    },
    {
      title: "Тип",
      dataIndex: "type",
      key: "type",
      render: (type) => <MyTag type={type} />,
    },
    {
      title: "Подробнее",
      dataIndex: "details",
      key: "details",
    },
  ]

  return <Table columns={columns} dataSource={data} />
}

export { MyTable }
