import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import './task-page.css'

const TaskPage = (props) => {
    const [ isModalVisible, setModalVisible ] = useState(false);
    const {content} = props;
    useEffect(() => {
        setModalVisible(props.visible);
    })


    console.log(content)

    return(
        <Modal 
          title={`${content.type} - ${content.name}`}
          centered
          visible={isModalVisible}
          onOk={() => setModalVisible(false)}
        >
          <p>{content.name}</p>
          <p>{content.type}</p>
          <p>{content.date}</p>
        </Modal>

    )
};

export { TaskPage };