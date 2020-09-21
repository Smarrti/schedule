import React, { useState } from 'react';
import { Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { CheckboxList } from './check-box-list'

const ColumnCheckbox = (props) => {
    const [ isListExpand, setListExpand ] = useState(false);
    const handleClick = () => {
        setListExpand(!isListExpand);
        props.refresh();
    };

    let icon = isListExpand === false ? <DownOutlined /> : <UpOutlined />;

    if(isListExpand) {
        return(
            <div>
                <Button icon={icon} onClick={() => handleClick()}/>
                <CheckboxList display={isListExpand} />
            </div>
    )} else {
        return(
            <div>
                <Button icon={icon} onClick={() => setListExpand(!isListExpand)}/>
            </div>
    )}
};

export {ColumnCheckbox};