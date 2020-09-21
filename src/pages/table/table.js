import React, { useContext, useState } from "react"
import { Table } from "antd"
import { DataContext } from "@lib/fetching"
import { DeleteButton } from "@features/deleting"
import { TableSizing } from "@features/sizing"
import { TableCustomization } from "@features/customization"
import { Size } from "@lib/sizing"
import { Style } from "@lib/customization"
import { columns, setRowStyleByType } from "./model"
import { AddingTaskBtn } from "@features/adding-task-btn"
import { AddingTaskForm } from "@features/adding-task-form"
import { ColumnCheckbox } from "@features/columns-checkbox"

const MyTable = () => {
  const data = useContext(DataContext)

  const [ isModalForAddingTaskVisible, setModalAddingTaskVisible ] = useState(false);
  const [ selectedColumns, setSelectedColumns ] = useState(localStorage.getItem('selectedBoxes'));
  
  const refreshTable = () => {
    setSelectedColumns(localStorage.getItem('selectedBoxes'));
  };

  const toggleModalForAddingTaskVisible = (isOpen) => {
    setModalAddingTaskVisible(() => {
      return isOpen
    })
  }
  const { tableSize } = useContext(Size)
  const { table } = useContext(Style)

  const visibleColumns = selectedColumns ? columns.filter((column) => selectedColumns.includes(column.title)) : columns;

  const expandable = {
    expandedRowRender: ({ id }) => <DeleteButton id={id} />,
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TableSizing />
        <ColumnCheckbox refresh={refreshTable}/>
        <TableCustomization />
        <AddingTaskBtn 
          isModalForAddingTaskVisible={isModalForAddingTaskVisible}
          toggleModalForAddingTaskVisible={toggleModalForAddingTaskVisible}
        />
      </div>
      <Table
        columns={visibleColumns}
        size={tableSize}
        expandable={expandable}
        dataSource={data}
        rowClassName={(record) => setRowStyleByType(record.type, table)}
        scroll={{x: true}}
      />
      <AddingTaskForm
        isModalForAddingTaskVisible={isModalForAddingTaskVisible}
        toggleModalForAddingTaskVisible={toggleModalForAddingTaskVisible}
      />
    </>
  )
}

export { MyTable }
