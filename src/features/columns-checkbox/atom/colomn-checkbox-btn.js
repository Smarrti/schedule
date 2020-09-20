import React, { useState } from 'react';
import { Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import { CheckboxList } from './check-box-list'

const ColumnCheckbox = () => {
    const [ isListExpand, setListExpand ] = useState(false);

    let icon = isListExpand === false ? <DownOutlined /> : <UpOutlined />;

    if(isListExpand) {
        return(
            <div>
                <Button icon={icon} onClick={() => setListExpand(!isListExpand)}/>
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