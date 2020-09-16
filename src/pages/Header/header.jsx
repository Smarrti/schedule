import React, {useState} from 'react';
import s from './header.module.css';
import {Button} from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";

const Header = (props) => {
    const [user, setUser] = useState(true);
    const toggleUser = () => {
        user === true ? setUser(false):setUser(true)
    };
    return (
        <header>
            <div className={s.buttons_block}>
                <div className={s.left_buttons_block}>
                    {user && <Button className={s.addTask} type="default" size="large" icon={<PlusOutlined/>}></Button>}
                    {user && <Button className={s.editTask} size="large" type="default" icon={<EditOutlined />}></Button>}
                    {user && <Button className={s.deleteTask} size="large" type="default" icon={<DeleteOutlined/>}></Button>}
                    <Button className={s.saveTable} size="large" type="default" icon={<SaveOutlined />}></Button>
                </div>
                <div className={s.right_buttons_block}>
                    <Button className={s.button} type="default" size="large" onClick={toggleUser}>
                        {user?"Студент":"Ментор"}
                    </Button>
                </div>
            </div>
        </header>
    );
}
export {Header}