
import React, { useContext, useState } from "react";
import { Table } from "antd";
import { DataContext } from "@lib/fetching";
import { Role } from "@lib/roles";
import { Size } from "@lib/sizing";
import { Style } from "@lib/customization";
import { DeleteButton } from "@features/deleting";
import { TableSizing } from "@features/sizing";
import { TableCustomization } from "@features/customization";
import { AddingTaskBtn } from "@features/adding-task-btn";
import { AddingTaskForm } from "@features/adding-task-form";
import { columns, setRowStyleByType } from "./model";
import { ColumnCheckbox } from "@features/columns-checkbox"
import classes from "./style.module.css";

const MyTable = () => {
  const data = useContext(DataContext);

  const [ selectedColumns, setSelectedColumns ] = useState(localStorage.getItem('selectedBoxes'));
  
  const refreshTable = () => {
    setSelectedColumns(localStorage.getItem('selectedBoxes'));
  };
  const { user } = useContext(Role);
  const { tableSize } = useContext(Size);
  const { table } = useContext(Style);

  const [isModalForAddingTaskVisible, setModalAddingTaskVisible] = useState(
    false
  );


  const toggleModalForAddingTaskVisible = (isOpen) => {
    setModalAddingTaskVisible(() => {
      return isOpen;
    });
  };

  const visibleColumns = selectedColumns ? columns.filter((column) => selectedColumns.includes(column.title)) : columns;

  const expandable = {
    expandedRowRender: !user ? ({ id }) => <DeleteButton id={id} /> : null,
  };
  return (
    <>
      <div className={classes.table}>
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
        scroll={{ x: true }}
      />
      <AddingTaskForm
        isModalForAddingTaskVisible={isModalForAddingTaskVisible}
        toggleModalForAddingTaskVisible={toggleModalForAddingTaskVisible}
      />
    </>
  );
};

export { MyTable };
