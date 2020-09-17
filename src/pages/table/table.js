import React, { useContext } from "react"
import { Table } from "antd"
import { DataContext } from "@lib/fetching"
import { DeleteButton } from "@features/deleting"
import { TableSizing } from "@features/sizing"
import { TableCustomization } from "@features/customization"
import { Size } from "@lib/sizing"
import { Style } from "@lib/customization"
import { columns, setRowStyleByType } from "./model"

const MyTable = () => {
  const data = useContext(DataContext)
  const { tableSize } = useContext(Size)
  const { table } = useContext(Style)

  const expandable = {
    expandedRowRender: ({ id }) => <DeleteButton id={id} />,
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TableSizing />
        <TableCustomization />
      </div>
      <Table
        columns={columns}
        size={tableSize}
        expandable={expandable}
        dataSource={data}
        rowClassName={(record) => setRowStyleByType(record.type, table)}
      />
    </>
  )
}

export { MyTable }
