import React, { useContext } from 'react';
import { Calendar, Button } from 'antd';
import { DataContext } from '@lib/fetching';

import './calendar.css';

const MyCalendar = () => {
    const data = useContext(DataContext);

    const eventClasses = (item) => {
      let className;
      switch (item.type) {
        case 'Лекция':
          className = 'blue';
          break;

        case 'Практическое занятие':
          className = 'orange';
          break;

        case 'Тест':
          className = 'green';
          break;
        default:
      }
      return className;
    };
  
    const casesCreation = (cases, item) => {
      if(!cases.includes(item.date)) {
        cases.push(item.date);
      };
    };

    const getListData = (value) => {
      const cases = [];
      let listData;
      data.map((item) => casesCreation(cases, item));
      for(let i=0; i<cases.length; i++) {
        if(new Date(value).toLocaleDateString() === cases[i]) {
          listData = data.filter((event) => event.date === cases[i]);
        };
      };
      return listData || [];
    };

    const dateCellRender = (value) => {
        const events = getListData(value);
        return(
          <ul className="calendar-events">
            {events.map((item) => (
              <li key={item.id}>
                <Button className={eventClasses(item)} type="primary">{item.type}</Button>
              </li>
            ))}
          </ul>
        )
      };
    
    return(
        <>
        <Calendar 
            dateCellRender={dateCellRender}
        />
        </>
    )
};

export {MyCalendar};