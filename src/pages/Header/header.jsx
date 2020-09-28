import React, { useContext, useEffect } from "react";
import s from "./header.module.css";
import { Button } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined";
import {useDispatch, useSelector} from "react-redux";
import {getModalForAddingTaskVisible, getRights} from "../../lib/redux/selectors";
import {actions} from "../../lib/redux/eventsReducer";
import {AddingTaskForm} from "../../features/adding-task-form/atom";

const Header = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(getRights)
    const toggleUser = () => {
        user === true ? dispatch(actions.toggleRights(false)):dispatch(actions.toggleRights(true))
    };
    const isModalForAddingTaskVisible = useSelector(getModalForAddingTaskVisible);
    const toggleModalForAddingTaskVisible = (isOpen) => {
     dispatch(actions.setModalAddingTaskVisible(isOpen));
    }
    return (
        <header>
            <div className={s.buttons_block}>
                <div className={s.left_buttons_block}>
                    {user && <Button className={s.addTask} type="default" size="large" icon={<PlusOutlined/>} onClick={()=>toggleModalForAddingTaskVisible(!isModalForAddingTaskVisible)}></Button>}
                    <Button className={s.saveTable} size="large" type="default" icon={<SaveOutlined />}></Button>
                </div>
                <div className={s.right_buttons_block}>
                    <Button className={s.button} type="default" size="large" onClick={toggleUser}>
                        {user?"Ментор":"Студент"}
                    </Button>
                </div>
            </div>
            <AddingTaskForm
              isModalForAddingTaskVisible={isModalForAddingTaskVisible}
              toggleModalForAddingTaskVisible={toggleModalForAddingTaskVisible}
              formName='Введите данные'
            />
        </header>
    );
}
export {Header}