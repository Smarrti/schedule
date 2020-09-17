import React from 'react';
import { Modal } from 'antd';

export const WindowModal = ({ properties, content }) => {
  return (
    <Modal
      {...properties}
    >
      { content }
    </Modal>
  )
}