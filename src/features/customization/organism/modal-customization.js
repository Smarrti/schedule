import React, { useState } from "react"
import { MyButton } from "@ui"
import Modal from "antd/lib/modal/Modal"
import { SettingOutlined } from "@ant-design/icons"

const ModalCustomization = ({ children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <MyButton
        text="Настройки"
        icon={<SettingOutlined />}
        onClick={() => setVisible(true)}
      />
      <Modal
        title="Настройки таблицы"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <MyButton key="cancel" type="danger" text="Отменить" />,
          <MyButton key="submit" type="primary" text="Принять" />,
        ]}
      >
        {children}
      </Modal>
    </>
  )
}

export { ModalCustomization }
