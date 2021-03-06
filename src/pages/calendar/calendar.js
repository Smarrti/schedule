import React, { useContext } from "react"
import { Calendar, Button } from "antd"
import { Size } from "@lib/sizing"
import { CalendarSizing } from "@features/sizing"
import { Spinner } from "@ui"
import "./calendar.css"
import {getEvents} from "../../lib/redux/selectors";
import {useSelector} from "react-redux";

const MyCalendar = () => {
  const data = useSelector(getEvents);
  const { calendarSize } = useContext(Size)

  const eventClasses = (item) => {
    let className
    switch (item.type) {
      case "Лекция":
        className = "blue"
        break

      case "Практическое занятие":
        className = "orange"
        break

      case "Тест":
        className = "green"
        break
      default:
    }
    return className
  }

  const casesCreation = (cases, item) => {
    if (!cases.includes(item.date)) {
      cases.push(item.date)
    }
  }

  const getListData = (value) => {
    const cases = []
    let listData
    data.map((item) => casesCreation(cases, item))
    for (let i = 0; i < cases.length; i++) {
      if (new Date(value).toLocaleDateString() === cases[i]) {
        listData = data.filter((event) => event.date === cases[i])
      }
    }
    return listData || []
  }

  const dateCellRender = (value) => {
    const events = getListData(value)
    return (
      <ul className="calendar-events">
        {events.map((item) => (
          <li key={item.id}>
            <Button className={eventClasses(item)} type="primary">
              {item.type}
            </Button>
          </li>
        ))}
      </ul>
    )
  }

  return data ? (
    <>
      <CalendarSizing />
      <Calendar
        dateCellRender={dateCellRender}
        fullscreen={calendarSize === "small" ? false : true}
      />
    </>
  ) : (
    <Spinner />
  )
}

export { MyCalendar }
