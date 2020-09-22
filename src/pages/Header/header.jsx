import React, { useContext, useEffect } from "react";
import s from "./header.module.css";
import { Button } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";
import { TableSave } from '@features/table-save';
import { Role } from "@lib/roles";

const Header = (props) => {
  const { user, dispatch } = useContext(Role);

  useEffect(() => {
    dispatch({ type: "GET_ROLE_FROM_LS" });
  }, [dispatch]);

  return (
    <header>
      <div className={s.buttons_block}>
        <div className={s.left_buttons_block}>
          {!user && (
            <Button
              className={s.addTask}
              type="default"
              size="large"
              icon={<PlusOutlined />}
            ></Button>
          )}
          {!user && (
            <Button
              className={s.editTask}
              size="large"
              type="default"
              icon={<EditOutlined />}
            ></Button>
          )}
          {!user && (
            <Button
              className={s.deleteTask}
              size="large"
              type="default"
              icon={<DeleteOutlined />}
            ></Button>
          )}
          <TableSave
            className={s.saveTable}
            size="large"
            type="default"
            icon={<SaveOutlined />}
          />
        </div>
        <div className={s.right_buttons_block}>
          <Button
            className={s.button}
            type="default"
            size="large"
            onClick={() => dispatch({ type: "SWITCH_ROLE" })}
          >
            {user ? "Студент" : "Ментор"}
          </Button>
        </div>
      </div>
    </header>
  );
};
export { Header };
