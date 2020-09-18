import React from 'react';
import { Button } from "antd";
import { CSVLink } from 'react-csv';

export const TableSave = ({ ...propertiesOfButton }) => {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
  ];

  return (
    <CSVLink data={data} headers={headers}>
      <Button
        {...propertiesOfButton}
      />
    </CSVLink>
  )
};
