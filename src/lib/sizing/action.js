import { CHANGE_TABLE_SIZE, CHANGE_CALENDAR_SIZE } from "./types"

export const changeTableSize = (payload) => {
  localStorage.setItem("table-size", payload)
  return {
    type: CHANGE_TABLE_SIZE,
    payload,
  }
}

export const changeCalendarSize = (payload) => {
  localStorage.setItem("calendar-size", payload)
  return {
    type: CHANGE_CALENDAR_SIZE,
    payload,
  }
}
