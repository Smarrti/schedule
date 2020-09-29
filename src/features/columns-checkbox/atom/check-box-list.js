import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import { columns } from "../../../pages/table/model";
import './checkbox-list.css';

const CheckboxList = () => {
    const list = columns.map((column) => column.title);
    const [ selectedValue, setSelectedValue ] = useState(localStorage.getItem('selectedBoxes') || list);

    const checkItem = (checkedValue) => {
        setSelectedValue(checkedValue);
    };

    useEffect(() => {
        localStorage.setItem('selectedBoxes', selectedValue);
    });

    return(
      <Checkbox.Group className="checkbox-list" options={list} value={selectedValue} onChange={checkItem}/>
    );
};

export {CheckboxList};
