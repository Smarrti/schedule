import React, { useState, useEffect, createRef } from 'react';
import { Button } from "antd";
import { CSVLink } from 'react-csv';
import { getTasks } from '@lib/getTasks';

export const TableSave = ({ ...propertiesOfButton }) => {
  const [dataTasks, setDataTasks] = useState([]);
  const [readyToDownload, setReadyDownload] = useState(false);
  const csvLink = createRef();

  useEffect(() => {
    if (readyToDownload) {
      setReadyDownload(false);
      csvLink.current.link.click();
    }
  }, [csvLink, dataTasks, readyToDownload]);

  const handleTaskDownload = async () => {
    const tasks = await getTasks();
    await setDataTasks(tasks);
    setReadyDownload(true);
  }

  return (
    <>
      <Button
        {...propertiesOfButton}
        onClick={() => handleTaskDownload()}
      />
      <CSVLink
        data={dataTasks}
        ref={csvLink}
        target="_blank"
        filename="tasks.csv"
      />
    </>
  )
};
