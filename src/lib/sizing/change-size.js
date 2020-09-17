import {
  CHANGE_CALENDAR_SIZE,
  CHANGE_TABLE_SIZE,
  GET_SIZES_FROM_LS,
} from "./types"

export const sizes = {
  tableSize: "middle",
  calendarSize: "small",
}

export const sizeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TABLE_SIZE:
      return { ...state, tableSize: action.payload }
    case CHANGE_CALENDAR_SIZE:
      return { ...state, calendarSize: action.payload }
    case GET_SIZES_FROM_LS:
      return {
        ...state,
        tableSize: localStorage.getItem("table-size") || "middle",
        calendarSize: localStorage.getItem("calendar-size") || "small",
      }

    default:
      return { ...state }
  }
}
