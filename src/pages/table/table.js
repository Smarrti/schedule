import React, { useContext, useState } from "react";
import { Table } from "antd";
import { DataContext } from "@lib/fetching";
import { DeleteButton } from "@features/deleting";
import { TableSizing, Size } from "@features/sizing";
import { TableCustomization, Style } from "@features/customization";
import { AddingTaskBtn } from "@features/adding-task-btn";
import { AddingTaskForm } from "@features/adding-task-form";
import { columns, setRowStyleByType } from "./model";
import classes from "./style.module.css";

const MyTable = () => {
  const data = useContext(DataContext);

  const [isModalForAddingTaskVisible, setModalAddingTaskVisible] = useState(
    false
  );

  const toggleModalForAddingTaskVisible = (isOpen) => {
    setModalAddingTaskVisible(() => {
      return isOpen;
    });
  };

  const { tableSize } = useContext(Size);
  const { table } = useContext(Style);

  const expandable = {
    expandedRowRender: ({ id }) => <DeleteButton id={id} />,

  };

  return (
    <>
      <div className={classes.table}>
        <TableSizing />
        <TableCustomization />
        <AddingTaskBtn
          isModalForAddingTaskVisible={isModalForAddingTaskVisible}
          toggleModalForAddingTaskVisible={toggleModalForAddingTaskVisible}
        />
      </div>
      <Table
        columns={columns}
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
