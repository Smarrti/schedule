import React, { useState } from "react"
import { MyButton } from "@ui"
import Modal from "antd/lib/modal/Modal"
import { SettingOutlined } from "@ant-design/icons"

const ModalCustomization = ({ children, resetStyles }) => {
  const [visible, setVisible] = useState(false)

  const handleReset = () => {
    setVisible(false)
    resetStyles()
  }

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
          <MyButton
            key="cancel"
            type="danger"
            text="Сбросить"
            onClick={handleReset}
          />,
          <MyButton
            key="submit"
            type="primary"
            text="Принять"
            onClick={() => setVisible(false)}
          />,
        ]}
      >
        {children}
      </Modal>
    </>
  )
}

export { ModalCustomization }
